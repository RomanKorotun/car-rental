import { Catalog } from "../components/Catalog/Catalog";
import { Section, ContainerPage } from "../components/Layout";

const CatalogPage = () => {
  return (
    <main>
      <Section>
        <ContainerPage>
          <Catalog />
        </ContainerPage>
      </Section>
    </main>
  );
};

export default CatalogPage;
