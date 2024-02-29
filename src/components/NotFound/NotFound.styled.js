import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundCard = styled.div`
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

export const LinkStyledNotFound = styled(Link)`
  display: inline-block;
  transition: text-decoration 250ms, transform 250ms;
  &:hover,
  :focus {
    transform: scale(1.02);
    text-decoration: underline;
  }
`;

export const SpanStyledNotFound = styled.span`
  color: gray;
`;
