import { Container } from "../../utils/Container";
import {
  FooterHeading,
  FooterIconList,
  FooterStyle,
  FooterWrap,
  SVGIcon,
} from "./Footer.styled";
import sprite from "../../../../images/sprite.svg";
export const Footer = () => {
  return (
    <>
      <FooterStyle>
        <Container>
          <FooterWrap>
            <FooterIconList>
              <li>
                <a href="/" target="_blank">
                  <SVGIcon className="icon-github" width="24px" height="24px">
                    <use href={`${sprite}#icon-github`}></use>
                  </SVGIcon>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <SVGIcon className="icon-linkedin" width="24px" height="24px">
                    <use href={`${sprite}#icon-linkedin`}></use>
                  </SVGIcon>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <SVGIcon className="icon-mail" width="24px" height="24px">
                    <use href={`${sprite}#icon-mail`}></use>
                  </SVGIcon>
                </a>
              </li>
            </FooterIconList>
            <FooterHeading>© 2023 | All Rights Reserved</FooterHeading>
          </FooterWrap>
        </Container>
      </FooterStyle>
    </>
  );
};
