import styled from "styled-components";

export const TweetsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 25px 0;
  max-height: auto;
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 280px;
  width: 85%;
  padding: 20px 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;

export const TweetsUserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DividerLine = styled.div`
  width: 117%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin: 18px 0 62px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 112%;
  }
`;

export const CardImageLogoIcons = styled.img`
  margin-right: auto;
`;

export const CardImageIcons = styled.img`
  max-width: 240px;
  width: 100%;
  height: 140px;
  @media screen and (min-width: 768px) {
    width: 310px;
    height: 170px;
  }
`;
export const CircleLine = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  position: absolute;
  top: -107px;
`;

export const TweetsUserInfoImage = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 7px;
  left: 7px;
  border-radius: 50%;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;
export const TweetsUserInfoText = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 175px;
  height: 40px;
  padding: 14px 28px;
  margin-top: 16px;
  background: ${(props) => (props.following ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  @media screen and (min-width: 768px) {
    margin-top: 26px;
    width: 195px;
    height: 50px;
    font-size: 18px;
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 100%;
  max-width: 175px;
  height: 40px;
  margin: 0 auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #fff;
  background: #d53d5c;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 26px;
    width: 195px;
    height: 50px;
    font-size: 18px;
  }
`;
