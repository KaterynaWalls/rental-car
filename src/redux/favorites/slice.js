import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      if (state.includes(carId)) {
        return state.filter((id) => id !== carId); // прибрати з обраного
      } else {
        state.push(carId); // додати до обраного
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
