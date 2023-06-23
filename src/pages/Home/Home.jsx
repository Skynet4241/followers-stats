import HomeImage from "../../../images/home-image.png";
import {
  HomepageDescription,
  HomepageImage,
  HomepageTitle,
  HomepageWrap,
} from "./Home.styled";

export const Home = () => {
  return (
    <>
      <HomepageWrap>
        <div>
          <HomepageTitle>
            Monitor & analyze your media subscriptions
          </HomepageTitle>
          <HomepageDescription>
            Track and analyze your social media subscriptions to gain valuable
            insights and practical knowledge about your online presence. Our
            service is a convenient tool that will help you better understand
            your social network and your relationships with other users. You
            will be able to view a complete list of the accounts you follow and
            easily track changes in that list over time. Additionally, you will
            receive information about the number of followers each user has and
            their activity on social media.
          </HomepageDescription>
        </div>

        <HomepageImage src={HomeImage} alt="Home-image" />
      </HomepageWrap>
    </>
  );
};
