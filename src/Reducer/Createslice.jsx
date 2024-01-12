import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  heartItems: [], 
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount += 1;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems.splice(existingItemIndex, 1);
        state.cartCount -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.cartCount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        state.cartCount -= 1;
      }
    },
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.heartItems.find((item) => item.id === id);

      if (!existingItem) {
        state.heartItems.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      const { id } = action.payload;
      const index = state.heartItems.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.heartItems.splice(index, 1);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToWishlist,
  removeFromWishlist,
} = CartSlice.actions;
export default CartSlice.reducer;
