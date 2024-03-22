import { Container } from "../Layout";
import { CopyrightAuthor, FooterFlex, FooterStyled } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterFlex>
          <span>Copyright &copy;</span>
          <a
            href="https://github.com/RomanKorotun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CopyrightAuthor> Roman Korotun</CopyrightAuthor>
          </a>
        </FooterFlex>
      </Container>
    </FooterStyled>
  );
};
