import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars } from "../../services/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const currentPage = state.cars.page;

      const data = await getCars({
        ...params,
        page: currentPage,
        limit: 12,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
