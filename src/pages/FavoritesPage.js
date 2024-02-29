import { Favorite } from "../components/Favorite/Favorite";
import { Section, ContainerPage } from "../components/Layout";
const FavoritePage = () => {
  return (
    <main>
      <Section>
        <ContainerPage>
          <Favorite />
        </ContainerPage>
      </Section>
    </main>
  );
};
export default FavoritePage;
