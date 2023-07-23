import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  data: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  // reducers: {
  //   fetchProducts(state, action) {
  //     state.data = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    });
    builder.addCase(getProductsData.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "error";
    });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProductsData = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

//to get data from api
// export function getProductsData() {
//   return async function getProductsDataThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }
