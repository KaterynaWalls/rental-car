import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./cars/slice";
import favoritesReducer from "./favorites/slice";
import filtersReducer from "./filters/filtersSlice";

const rootReducer = combineReducers({
  cars: carsReducer, // список авто + пагінація
  favorites: favoritesReducer, // обрані авто
  filters: filtersReducer, // бренд, ціна, пробіг
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // тільки favorites буде зберігатись
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
