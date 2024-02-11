import { createSelector } from "reselect";

export const marketSelector = createSelector(
  (state) => state,
  ({ market }) => market
);
