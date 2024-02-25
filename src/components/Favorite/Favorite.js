import { CardList } from "../CardList/CardList";
import { Section, ContainerPage } from "../Layout";
import { MessageInfoFavorite } from "../Message";
import { useCars } from "../../hooks/useCars";
import { LinkStyledFavorite } from "./Favorite.styled";
export const Favorite = () => {
  const { cars } = useCars();
  const carsHearts = cars.filter((el) => el.fill);
  return (
    <Section>
      <ContainerPage>
        {carsHearts.length > 0 && <CardList cars={carsHearts} />}
        {carsHearts.length === 0 && (
          <MessageInfoFavorite>
            Please go to the{" "}
            <LinkStyledFavorite to="/catalog">catalog page</LinkStyledFavorite>{" "}
            to add the car to your favorites category.
          </MessageInfoFavorite>
        )}
      </ContainerPage>
    </Section>
  );
};
