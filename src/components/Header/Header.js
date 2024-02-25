import { Link } from "react-router-dom";
import {
  HeaderStyled,
  ListStyled,
  NavLinkStyled,
  NavStyled,
} from "./Header.styled";
import { Container } from "../Layout";
export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavStyled>
          <Link to="/">CarRental</Link>
          <ListStyled>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
            </li>
          </ListStyled>
        </NavStyled>
      </Container>
    </HeaderStyled>
  );
};
