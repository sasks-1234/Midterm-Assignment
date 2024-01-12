import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducer/Createslice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
