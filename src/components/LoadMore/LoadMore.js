import { BtnStyled } from "./LoadMore.styled";
import { useCars } from "../../hooks/useCars";
import { useDispatch } from "react-redux";
import { allCars } from "../../redux/cars/carsOperations";

export const LoadMore = () => {
  const { page } = useCars();
  const dispatch = useDispatch();
  return (
    <BtnStyled onClick={() => dispatch(allCars(page))}>Load More</BtnStyled>
  );
};
