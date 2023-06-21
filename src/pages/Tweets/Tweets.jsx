import {
  useGetUsersInfoQuery,
  useUpdateUsersInfoMutation,
} from "../../API/getUsersInfo";
import Icons from "../../../images/icons.png";
import GoIT from "../../../images/goit.png";
import {
  CardImageIcons,
  CardImageLogoIcons,
  CardWrap,
  CircleLine,
  DividerLine,
  FollowButton,
  LoadMoreButton,
  TweetsUserInfoImage,
  TweetsUserInfoText,
  TweetsUserInfoWrap,
  TweetsWrap,
  UserInfoWrap,
} from "./Tweets.styled";
import { useState } from "react";

export const Tweets = () => {
  const [limit, setLimit] = useState(3);
  const { data, isLoading } = useGetUsersInfoQuery({ limit });
  const [updateUsersInfo] = useUpdateUsersInfoMutation();

  const handleLoadMore = () => {
    setLimit(limit + 3);
  };

  const handleFollowClick = async (id, userFollowers) => {
    let newFollowers;

    if (userFollowers === 100500) {
      newFollowers = userFollowers + 1;
    } else {
      newFollowers = userFollowers - 1;
    }
    const updateFollowers = {
      followers: newFollowers,
    };

    await updateUsersInfo({ id, body: updateFollowers });
  };

  return (
    <>
      {isLoading ? (
        <TweetsWrap>Loading...</TweetsWrap>
      ) : (
        <>
          <TweetsWrap>
            {data.map((item) => (
              <CardWrap key={item.id}>
                <CardImageLogoIcons src={GoIT} alt="logo-go-it" />
                <CardImageIcons src={Icons} alt="icons" />
                <DividerLine />
                <TweetsUserInfoWrap>
                  <CircleLine>
                    <TweetsUserInfoImage src={item.avatar} alt="user-avatar" />
                  </CircleLine>

                  <UserInfoWrap>
                    <TweetsUserInfoText>
                      {item.tweets} tweets
                    </TweetsUserInfoText>
                    <TweetsUserInfoText>
                      {item.followers.toLocaleString("en-US")} followers
                    </TweetsUserInfoText>
                  </UserInfoWrap>
                  <FollowButton
                    onClick={() => handleFollowClick(item.id, item.followers)}
                    following={item.followers > 100500 ? "true" : undefined}
                  >
                    {item.followers > 100500 ? "following" : "follow"}
                  </FollowButton>
                </TweetsUserInfoWrap>
              </CardWrap>
            ))}
          </TweetsWrap>
          {limit === 12 ? null : (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};
