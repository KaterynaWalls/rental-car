import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectIsLoading,
  selectError,
  selectHasMore,
} from "../../redux/cars/selectors";
import { resetCars, incrementPage } from "../../redux/cars/slice";

import FilterForm from "../../components/FilterForm/FilterForm";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);

  const filters = {}; // скоро заміниш на дані з filtersSlice

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchCars(filters));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCars(filters));
  };

  return (
    <div className={s.catalogPageContainer}>
      <FilterForm />

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <CarCatalog />

      {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
    </div>
  );
};

export default CatalogPage;
