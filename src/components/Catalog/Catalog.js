import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allCars } from "../../redux/cars/carsOperations";
import { useCars } from "../../hooks/useCars";
import { CardList } from "../CardList/CardList";
import { ContainerPage, Section } from "../Layout";
import { SearchForm } from "../SearchForm/SearchForm";
import { MessageInfoCatalog } from "../Message";
import { Loader } from "../Loader/Loader";

export const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCars());
  }, [dispatch]);
  const { cars, error, loading } = useCars();

  return (
    <Section>
      <ContainerPage>
        <SearchForm />
        {loading && <Loader />}
        {error && <div>Error...</div>}
        {cars.length > 0 && <CardList cars={cars} />}
        {cars.length === 0 && !loading && (
          <MessageInfoCatalog>
            Sorry, no matches were found for your query Please try again.
          </MessageInfoCatalog>
        )}
      </ContainerPage>
    </Section>
  );
};
