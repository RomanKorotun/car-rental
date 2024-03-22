import { Favorite } from "../components/Favorite/Favorite";
import { Section, Container } from "../components/Layout";
import { useCars } from "../hooks/useCars";
import { MessageInfo, LinkStyledFavorite } from "../components/Message";

const FavoritePage = () => {
  const { allCars } = useCars();
  const carsHearts = allCars.filter((car) => car.fill);
  return (
    <main>
      <Section>
        <Container>
          {carsHearts.length > 0 && <Favorite cars={carsHearts} />}
          {carsHearts.length === 0 && (
            <MessageInfo>
              Please go to the{" "}
              <LinkStyledFavorite to="/catalog">
                catalog page
              </LinkStyledFavorite>{" "}
              to add the car to your favorites category.
            </MessageInfo>
          )}
        </Container>
      </Section>
    </main>
  );
};
export default FavoritePage;
