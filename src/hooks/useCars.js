import { useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectLoading,
  selectPage,
  selectCarsHeart,
  selectAllCarsIsEmptyLoadMore,
} from "../redux/cars/carsSelectors";

export const useCars = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const carsHeart = useSelector(selectCarsHeart);
  const allCarsIsEmptyLoadMore = useSelector(selectAllCarsIsEmptyLoadMore);

  return {
    cars,
    carsHeart,
    error,
    loading,
    page,
    allCarsIsEmptyLoadMore,
  };
};
