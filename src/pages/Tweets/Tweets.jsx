import {
  useGetUsersInfoQuery,
  useUpdateUsersInfoMutation,
} from "../../API/getUsersInfo";
import Icons from "../../../images/icons.png";
import GoIT from "../../../images/goit.png";
import {
  BackToHomeButton,
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
import { useEffect, useState } from "react";
import sprite from "../../../images/sprite.svg";
import { FilterDropdown } from "../../components/Dropdown/FilterDropdown";

export const Tweets = () => {
  const [limit, setLimit] = useState(3);
  const [filter, setFilter] = useState("show_all");
  const { data, isLoading } = useGetUsersInfoQuery();
  const [updateUsersInfo] = useUpdateUsersInfoMutation();
  const [filteredData, setFilteredData] = useState([]);

  const handleLoadMore = () => {
    setLimit(limit + 3);
  };

  useEffect(() => {
    if (data !== undefined) {
      setFilteredData(data);
    }
  }, [data]);

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

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filtered = filteredData.filter((item) => {
    if (filter === "show_all") {
      return item;
    } else if (filter === "follow") {
      return item.followers === 100500;
    } else if (filter === "followings") {
      return item.followers === 100501;
    }
  });

  return (
    <>
      {isLoading ? (
        <TweetsWrap>Loading...</TweetsWrap>
      ) : (
        <>
          <BackToHomeButton to="/">
            <svg className="icon-arrow-left" width="24px" height="24px">
              <use href={`${sprite}#icon-arrow-left`}></use>
            </svg>
            Back to home
          </BackToHomeButton>
          <FilterDropdown onChange={handleFilterChange} />
          <TweetsWrap>
            {filtered.slice(0, limit).map((item) => (
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
          {filtered.length <= limit ? null : (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};
