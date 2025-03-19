import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the cart
const initialState = {
  items: [], // Array to hold cart items
};

// Create the cart slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item with a default quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = []; // Reset the cart to an empty array
    },
  },
});

// Export the actions
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;