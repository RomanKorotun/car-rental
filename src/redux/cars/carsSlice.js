import { createSlice } from '@reduxjs/toolkit';
import { allCars } from './carsOperations';

let cars = [];
let carsHeart = [];

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    carsHeartPersist: [],
    error: false,
    loading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(allCars.pending, state => {
        state.error = false;
        if (state.cars.length === 0) {
          state.loading = true;
        }
      })
      .addCase(allCars.fulfilled, (state, action) => {
        state.loading = false;
        if (state.cars.length === 0) {
          state.cars = action.payload;
          cars = action.payload;
          state.carsHeartPersist = action.payload;
          return;
        }
        const items = state.carsHeartPersist.map(car => {
          const res = state.cars.find(persistCar => persistCar.id === car.id);

          if (!res) {
            return car;
          } else {
            return res;
          }
        });
        state.cars = items;
        cars = items;
      }),
  reducers: {
    filters: (state, { payload: { brand, mileageFrom, mileageTo, price } }) => {
      state.cars = cars.map(el => {
        const item = carsHeart.find(elem => elem.id === el.id);
        console.log(item);
        if (!item) {
          return el;
        } else {
          return item;
        }
      });

      state.carsHeartPersist = cars.map(el => {
        const item = carsHeart.find(elem => elem.id === el.id);
        console.log(item);
        if (!item) {
          return el;
        } else {
          return item;
        }
      });

      state.cars = state.cars.filter(car => {
        //=====================================================================
        if (
          brand === 'all' &&
          price === 'all' &&
          mileageFrom === '' &&
          mileageTo === ''
        ) {
          return car;
        }
        if (brand === 'all' && price === 'all' && mileageFrom === '') {
          return mileageTo >= car.mileage;
        }
        if (brand === 'all' && price === 'all' && mileageTo === '') {
          return mileageFrom <= car.mileage;
        }
        if (brand === 'all' && price === 'all') {
          return mileageFrom <= car.mileage && mileageTo >= car.mileage;
        }
        if (brand === 'all' && mileageFrom === '' && mileageTo === '') {
          return car.rentalPrice.split('$')[1] === price;
        }
        if (brand === 'all' && mileageFrom === '') {
          return (
            car.rentalPrice.split('$')[1] === price && mileageTo >= car.mileage
          );
        }
        if (brand === 'all' && mileageTo === '') {
          return (
            car.rentalPrice.split('$')[1] === price &&
            mileageFrom <= car.mileage
          );
        }
        if (brand === 'all') {
          return (
            car.rentalPrice.split('$')[1] === price &&
            mileageFrom <= car.mileage &&
            mileageTo >= car.mileage
          );
        }
        //===========================================================================
        if (price === 'all' && mileageFrom === '' && mileageTo === '') {
          return car.make.toLowerCase() === brand;
        }
        if (price === 'all' && mileageFrom === '') {
          return car.make.toLowerCase() === brand && mileageTo >= car.mileage;
        }
        if (price === 'all' && mileageTo === '') {
          return car.make.toLowerCase() === brand && mileageFrom <= car.mileage;
        }
        if (price === 'all') {
          return (
            car.make.toLowerCase() === brand &&
            mileageFrom <= car.mileage &&
            mileageTo >= car.mileage
          );
        }
        //=============================================================================
        return (
          car.make.toLowerCase() === brand &&
          car.rentalPrice.split('$')[1] === price &&
          mileageFrom <= car.mileage &&
          mileageTo >= car.mileage
        );
      });
    },
    iconColor: (state, action) => {
      const { payload: id } = action;
      const res = state.cars.map(car => {
        if (car.id === id) {
          if (car.fill) {
            delete car.fill;
          } else {
            car.fill = '#3470ff';
          }
        }
        return car;
      });

      state.cars = res;
      carsHeart = res;
    },
  },
});

export const carsReduser = carsSlice.reducer;
export const { filters, iconColor } = carsSlice.actions;
