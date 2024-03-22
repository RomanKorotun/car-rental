import { Home } from "../components/Home/Home.styled";
import { Container } from "../components/Layout";
import { TitleHome } from "../components/TitleHome/TitleHome";

const HomePage = () => {
  return (
    <main>
      <Home>
        <Container>
          <TitleHome />
        </Container>
      </Home>
    </main>
  );
};

export default HomePage;
