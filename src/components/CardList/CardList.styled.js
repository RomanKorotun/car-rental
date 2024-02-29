import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 767px) {
    width: 274px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1157px) {
    width: 577px;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - 29px) / 2);
  }
  @media only screen and (min-width: 1158px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`;
