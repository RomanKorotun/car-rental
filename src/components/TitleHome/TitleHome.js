import {
  HomeLogo,
  TitleHomeLinkStyled,
  TitleHomeStyled,
} from "./TitleHome.styled";

export const TitleHome = () => {
  return (
    <TitleHomeStyled>
      Our <HomeLogo>CarRental</HomeLogo> website offers a wide range of cars for
      rent at the best prices. Please go to the&nbsp;
      <TitleHomeLinkStyled to="catalog">Catalog</TitleHomeLinkStyled> tab and
      select a car with the characteristics you need.
    </TitleHomeStyled>
  );
};
