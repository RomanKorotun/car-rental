import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% / 29px) / 2);
  }
  @media only screen and (min-width: 1158px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`;
