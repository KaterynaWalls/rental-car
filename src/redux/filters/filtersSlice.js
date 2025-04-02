import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export default filtersSlice.reducer;
