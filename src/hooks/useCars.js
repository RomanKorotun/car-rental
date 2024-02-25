import { useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectLoading,
  selectIconColor,
} from '../redux/cars/carsSelectors';

export const useCars = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return {
    cars,
    error,
    loading,
  };
};
