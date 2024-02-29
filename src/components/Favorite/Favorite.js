import { CardList } from "../CardList/CardList";
import { MessageInfoFavorite } from "../Message";
import { useCars } from "../../hooks/useCars";
import { LinkStyledFavorite } from "./Favorite.styled";
export const Favorite = () => {
  const { allCars } = useCars();
  const carsHearts = allCars.filter((car) => car.fill);
  return (
    <>
      {carsHearts.length > 0 && <CardList cars={carsHearts} />}
      {carsHearts.length === 0 && (
        <MessageInfoFavorite>
          Please go to the{" "}
          <LinkStyledFavorite to="/catalog">catalog page</LinkStyledFavorite> to
          add the car to your favorites category.
        </MessageInfoFavorite>
      )}
    </>
  );
};
