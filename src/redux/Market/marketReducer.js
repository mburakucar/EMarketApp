import { createSlice } from "@reduxjs/toolkit";
import {
  setLoading,
  startGetData,
  setData,
  setFilterLoading,
  startGetFilters,
  setFilters,
  setFilter,
  setCart,
  setFavorites,
} from "./marketActions";

export const marketSlice = createSlice({
  name: "market",
  initialState: {
    loading: false,
    filterLoading: false,
    data: [],
    filters: {},
    filterParams: {},
    cart: [],
    favorites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      })
      .addCase(startGetData, (state, action) => {
        state.loading = true;
      })
      .addCase(setData, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(setFilterLoading, (state, action) => {
        state.filterLoading = action.payload;
      })
      .addCase(setFilter, (state, action) => {
        state.filterParams = action.payload;
      })
      .addCase(startGetFilters, (state, action) => {
        state.filterLoading = true;
      })
      .addCase(setFilters, (state, action) => {
        var brands = [];
        var models = [];
        action?.payload?.map(function (item) {
          if (!brands.includes(item.brand)) {
            brands.push(item.brand);
          }
          models.push({ brand: item.brand, model: item.model });
        });
        state.filterLoading = false;
        state.filters = { brands: brands, models: models };
      })
      .addCase(setCart, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(setFavorites, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export default marketSlice.reducer;
