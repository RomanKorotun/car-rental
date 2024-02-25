import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6534e3b6e1b6f4c590470341.mockapi.io/api";

export const allCars = createAsyncThunk(
  "allCars",
  async (page = 1, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: 12,
      });
      const response = await axios.get(`/adverts?${params}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const allCarsIsEmptyLoadMoreBtn = createAsyncThunk(
  "allCarsLoadMore",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
