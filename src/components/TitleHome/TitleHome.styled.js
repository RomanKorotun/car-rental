import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleHomeStyled = styled.h1`
  color: white;
  text-align: center;
  font-size: 26px;
  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media only screen and (min-width: 1158px) {
    font-size: 44px;
  }
`;

export const HomeLogo = styled.span`
  color: #b0c4de;
`;

export const TitleHomeLinkStyled = styled(Link)`
  color: #b0c4de;
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;
