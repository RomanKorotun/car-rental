import { createSlice } from "@reduxjs/toolkit";
import { allCars, allCarsIsEmptyLoadMoreBtn } from "./carsOperations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    page: 1,
    cars: [],
    allCarsIsEmptyLoadMore: [],
    allCars: [],
    error: false,
    loading: false,
    brandFormik: "all",
    priceFormik: "all",
  },
  extraReducers: (builder) =>
    builder
      .addCase(allCars.pending, (state) => {
        state.error = false;
        if (state.cars.length === 0) {
          state.loading = true;
        }
      })
      .addCase(allCars.fulfilled, (state, action) => {
        state.page = state.page + 1;
        state.loading = false;
        state.cars = [...state.cars, ...action.payload];
        state.allCars = [...state.allCars, ...action.payload];
      })
      .addCase(allCarsIsEmptyLoadMoreBtn.fulfilled, (state, action) => {
        state.allCarsIsEmptyLoadMore = action.payload;
      }),
  reducers: {
    filters: (state, { payload: { brand, mileageFrom, mileageTo, price } }) => {
      state.cars = state.allCars.filter((car) => {
        //==============================================================
        if (brand) {
          state.brandFormik = brand;
        }
        if (price) {
          state.priceFormik = price;
        }
        //=====================================================================
        if (
          brand === "all" &&
          price === "all" &&
          mileageFrom === "" &&
          mileageTo === ""
        ) {
          return car;
        }
        if (brand === "all" && price === "all" && mileageFrom === "") {
          return mileageTo >= car.mileage;
        }
        if (brand === "all" && price === "all" && mileageTo === "") {
          return mileageFrom <= car.mileage;
        }
        if (brand === "all" && mileageFrom === "" && mileageTo === "") {
          return car.rentalPrice.split("$")[1] === price;
        }
        if (brand === "all" && price === "all") {
          return mileageFrom <= car.mileage && mileageTo >= car.mileage;
        }

        if (brand === "all" && mileageFrom === "") {
          return (
            car.rentalPrice.split("$")[1] === price && mileageTo >= car.mileage
          );
        }
        if (brand === "all" && mileageTo === "") {
          return (
            car.rentalPrice.split("$")[1] === price &&
            mileageFrom <= car.mileage
          );
        }
        if (brand === "all") {
          return (
            car.rentalPrice.split("$")[1] === price &&
            mileageFrom <= car.mileage &&
            mileageTo >= car.mileage
          );
        }
        //===========================================================================
        if (price === "all" && mileageFrom === "" && mileageTo === "") {
          return car.make.toLowerCase() === brand;
        }
        if (price === "all" && mileageFrom === "") {
          return car.make.toLowerCase() === brand && mileageTo >= car.mileage;
        }
        if (price === "all" && mileageTo === "") {
          return car.make.toLowerCase() === brand && mileageFrom <= car.mileage;
        }
        if (price === "all") {
          return (
            car.make.toLowerCase() === brand &&
            mileageFrom <= car.mileage &&
            mileageTo >= car.mileage
          );
        }
        //=============================================================================
        if (mileageFrom === "" && mileageTo === "") {
          return (
            car.make.toLowerCase() === brand &&
            car.rentalPrice.split("$")[1] === price
          );
        }
        //=============================================================================
        return (
          car.make.toLowerCase() === brand &&
          car.rentalPrice.split("$")[1] === price &&
          mileageFrom <= car.mileage &&
          mileageTo >= car.mileage
        );
      });
    },

    iconColor: (state, action) => {
      const {
        payload: { id },
      } = action;
      state.cars = state.cars.map((car) => {
        if (car.id === id) {
          if (car.fill) {
            delete car.fill;
          } else {
            car.fill = "#3470ff";
          }
        }
        return car;
      });

      state.allCars = state.allCars.map((car) => {
        if (car.id === id) {
          if (car.fill) {
            delete car.fill;
          } else {
            car.fill = "#3470ff";
          }
        }
        return car;
      });
    },
  },
});

export const carsReduser = carsSlice.reducer;
export const { filters, resetFilters, iconColor } = carsSlice.actions;
