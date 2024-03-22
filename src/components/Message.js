import styled from "styled-components";
import { Link } from "react-router-dom";

export const MessageInfo = styled.div`
  text-align: center;
  @media only screen and (max-width: 427px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 428px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const LinkStyledFavorite = styled(Link)`
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;
