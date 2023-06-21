import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageHeader = styled.header`
  background: #251928;
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 40px;
`;

export const HeaderNavLink = styled(NavLink)`
  display: block;
  padding: 20px 0;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: #f5fbf2;
`;
