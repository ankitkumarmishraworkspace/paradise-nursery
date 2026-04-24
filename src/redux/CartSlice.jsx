import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {

    // ✅ Add item to cart
    addItem: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ Remove item completely
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // ✅ Update quantity (increase/decrease)
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity += amount;

        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
