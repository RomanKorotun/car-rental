import { useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectLoading,
  selectPage,
  selectAllCarsIsEmptyLoadMore,
  selectAllCars,
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
} from "../redux/cars/carsSelectors";

export const useCars = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const allCarsIsEmptyLoadMore = useSelector(selectAllCarsIsEmptyLoadMore);
  const allCars = useSelector(selectAllCars);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  return {
    cars,
    error,
    loading,
    page,
    allCarsIsEmptyLoadMore,
    allCars,
    brand,
    price,
    mileageFrom,
    mileageTo,
  };
};
