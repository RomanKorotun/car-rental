import { Section, ContainerPage } from "../components/Layout";
import { NotFound } from "../components/NotFound/NotFound";

const NotFoundPage = () => {
  return (
    <Section>
      <ContainerPage>
        <NotFound />
      </ContainerPage>
    </Section>
  );
};

export default NotFoundPage;
