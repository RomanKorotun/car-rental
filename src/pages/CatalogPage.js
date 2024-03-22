import { Catalog } from "../components/Catalog/Catalog";
import { Section, Container } from "../components/Layout";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { Loader } from "../components/Loader/Loader";
import { MessageInfo } from "../components/Message";
import { useCars } from "../hooks/useCars";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  allCars,
  allCarsIsEmptyLoadMoreBtn,
} from "../redux/cars/carsOperations";
import { LoadMore } from "../components/LoadMore/LoadMore";

const CatalogPage = () => {
  const {
    cars,
    error,
    loading,
    page,
    allCarsIsEmptyLoadMore,
    brand,
    price,
    mileageFrom,
    mileageTo,
  } = useCars();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1 && cars.length === 0) {
      dispatch(allCars());
      dispatch(allCarsIsEmptyLoadMoreBtn());
    }
  }, [dispatch, page, cars]);

  const isEmptyLoadMore = page <= Math.ceil(allCarsIsEmptyLoadMore.length / 12);
  return (
    <main>
      <Section>
        <Container>
          <SearchForm />
          {loading && <Loader />}
          {error && (
            <MessageInfo>
              Error... Please reload the page and try again!
            </MessageInfo>
          )}
          {cars.length === 0 && !loading && (
            <MessageInfo>
              Sorry, no matches were found for your query. Please try again.
            </MessageInfo>
          )}
          {cars.length > 0 && <Catalog cars={cars} />}
          {isEmptyLoadMore &&
            cars.length > 0 &&
            brand === "all" &&
            price === "all" &&
            mileageFrom === "" &&
            mileageTo === "" && <LoadMore />}
        </Container>
      </Section>
    </main>
  );
};

export default CatalogPage;
