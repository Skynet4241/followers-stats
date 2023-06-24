import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #251928;
  margin-top: auto;
`;
export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FooterIconList = styled.ul`
  margin: 20px 0;
  display: flex;
  gap: 25px;
`;
export const SVGIcon = styled.svg`
  fill: #d53d5c;
  transition: all 0.3s ease-in-out;
  &:hover {
    fill: #ea9137;
    scale: 1.05;
  }
`;
export const FooterHeading = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #d53d5c;
  margin-bottom: 10px;
`;
