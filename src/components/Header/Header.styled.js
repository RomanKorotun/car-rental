import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid black;
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1158px) {
    font-size: 22px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 30px;
  }
  @media only screen and (min-width: 1158px) {
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 2500ms;
  &.active {
    color: black;
    text-decoration: underline;
  }
  &:hover,
  :focus {
    color: black;
  }
`;
