import { NavLink } from "react-router-dom";
import {
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
  HeaderWrap,
  PageHeader,
} from "./Header.styled";
import Logo from "../../../../images/logo.png";
import { Container } from "../../utils/Container";
export const Header = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <HeaderWrap>
            <NavLink to="/">
              <HeaderLogo src={Logo} alt="Logo" />
            </NavLink>

            <HeaderNav>
              <div>
                <HeaderNavLink to="/">Home</HeaderNavLink>
              </div>
              <div>
                <HeaderNavLink to="/tweets">Tweets</HeaderNavLink>
              </div>
            </HeaderNav>
          </HeaderWrap>
        </Container>
      </PageHeader>
    </>
  );
};
