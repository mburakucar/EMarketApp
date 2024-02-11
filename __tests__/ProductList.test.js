import React from "react";
import { render, act } from "@testing-library/react-native";
import ProductList from "../src/screens/Products/ProductList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "@redux/reducers";
import { startGetData } from "@redux/Market/marketActions";

describe("ProductList component", () => {
  let store;

  beforeEach(() => {
    const sagaMiddleware = createSagaMiddleware();

    store = configureStore({
      reducer: reducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(getByText("E-Market")).toBeTruthy();
  });

  it("dispatches startGetData action on mount", async () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    const dispatchSpy = jest.fn();
    await act(async () => {
      dispatchSpy(
        startGetData({ page: 1, limit: 12, search: "", filters: {} })
      );
    });
    expect(dispatchSpy).toHaveBeenCalledWith(
      startGetData({ page: 1, limit: 12, search: "", filters: {} })
    );
  });

  it("renders Header with correct text", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(getByText("E-Market")).toBeTruthy();
  });
});
