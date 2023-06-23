import styled from "styled-components";

export const HomepageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
export const HomepageTitle = styled.h1`
  width: 100%;
  max-width: 350px;
  font-family: "Montserrat";
  font-size: 26px;
  font-weight: 600;
  line-height: 1.22;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    max-width: 440px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 46px;
    max-width: 540px;
  }
`;

export const HomepageImage = styled.img`
  width: 210px;
  height: 180px;
  @media screen and (min-width: 768px) {
    width: 360px;
    height: 320px;
  }
  @media screen and (min-width: 1200px) {
    width: 540px;
    height: 480px;
  }
`;

export const HomepageDescription = styled.p`
  width: 100%;
  max-width: 350px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.22;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 440px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
    max-width: 540px;
  }
`;
