import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  allCars,
  allCarsIsEmptyLoadMoreBtn,
} from "../../redux/cars/carsOperations";
import { useCars } from "../../hooks/useCars";
import { CardList } from "../CardList/CardList";
import { ContainerPage, Section } from "../Layout";
import { SearchForm } from "../SearchForm/SearchForm";
import { MessageInfoCatalog } from "../Message";
import { Loader } from "../Loader/Loader";
import { LoadMore } from "../LoadMore/LoadMore";

export const Catalog = () => {
  const { cars, carsHeart, error, loading, page, allCarsIsEmptyLoadMore } =
    useCars();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1 && cars.length === 0) {
      dispatch(allCars());
      dispatch(allCarsIsEmptyLoadMoreBtn());
    }
  }, [dispatch, page, cars]);

  const newCars = cars.map((el) => {
    const item = carsHeart.find((elem) => elem.id === el.id);
    if (!item) {
      return el;
    } else {
      return item;
    }
  });

  const isEmptyLoadMore = page <= Math.ceil(allCarsIsEmptyLoadMore.length / 12);

  return (
    <Section>
      <ContainerPage>
        <SearchForm />
        {loading && <Loader />}
        {error && <div>Error...</div>}
        {newCars.length > 0 && <CardList cars={newCars} />}
        {newCars.length === 0 && !loading && (
          <MessageInfoCatalog>
            Sorry, no matches were found for your query Please try again.
          </MessageInfoCatalog>
        )}
        {isEmptyLoadMore && <LoadMore />}
      </ContainerPage>
    </Section>
  );
};
