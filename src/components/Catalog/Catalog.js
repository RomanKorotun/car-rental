import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  allCars,
  allCarsIsEmptyLoadMoreBtn,
} from "../../redux/cars/carsOperations";
import { useCars } from "../../hooks/useCars";
import { CardList } from "../CardList/CardList";
import { SearchForm } from "../SearchForm/SearchForm";
import { MessageInfoCatalog } from "../Message";
import { Loader } from "../Loader/Loader";
import { LoadMore } from "../LoadMore/LoadMore";

export const Catalog = () => {
  const { cars, error, loading, page, allCarsIsEmptyLoadMore, brand, price } =
    useCars();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1 && cars.length === 0) {
      dispatch(allCars());
      dispatch(allCarsIsEmptyLoadMoreBtn());
    }
  }, [dispatch, page, cars]);

  const isEmptyLoadMore = page <= Math.ceil(allCarsIsEmptyLoadMore.length / 12);

  return (
    <>
      <SearchForm />
      {loading && <Loader />}
      {error && <div>Error...</div>}
      {cars.length > 0 && <CardList cars={cars} />}
      {cars.length === 0 && !loading && (
        <MessageInfoCatalog>
          Sorry, no matches were found for your query Please try again.
        </MessageInfoCatalog>
      )}
      {isEmptyLoadMore &&
        cars.length > 0 &&
        brand === "all" &&
        price === "all" && <LoadMore />}
    </>
  );
};
