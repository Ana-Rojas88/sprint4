import { configureStore } from "@reduxjs/toolkit";
import { foodReducers, orderReducer, restaurantReducers } from "../reducers/foodReducers";
import { userReducer } from "../reducers/userReducers";

const reducer = {
  user: userReducer,
  foodStore: foodReducers,
  restaurantStore: restaurantReducers,
  orderStore: orderReducer
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
