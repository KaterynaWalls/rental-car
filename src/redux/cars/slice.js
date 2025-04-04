import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    hasMore: true,
  },
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.error = null;
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        console.log("✅ Fetched:", action.payload);
        state.isLoading = false;

        if (action.payload.length === 0) {
          state.hasMore = false;
          return;
        }

        // state.items = [...state.items, ...action.payload.cars];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, incrementPage } = slice.actions;
export default slice.reducer;
