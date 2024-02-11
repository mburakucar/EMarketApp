import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction("market/setLoading");
export const startGetData = createAction("market/startGetData");
export const setData = createAction("market/setData");
export const setFilterLoading = createAction("market/setFilterLoading");
export const startGetFilters = createAction("market/startGetFilters");
export const setFilters = createAction("market/setFilters");
export const setFilter = createAction("market/setFilter");
export const setCart = createAction("market/setCart");
export const setFavorites = createAction("market/setFavorites");
