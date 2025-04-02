import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default carsSlice.reducer;
