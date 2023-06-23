import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ErrorPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
  padding: 0 20px;
`;
export const ErrorPageImage = styled.img`
  width: 220px;
  height: 340px;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 440px;
  }
`;
export const ErrorPageTitle = styled.h2`
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 46px;
  }
`;
export const ErrorPageText = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;
export const ErrorPageButton = styled(NavLink)`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 600;
  color: red;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
