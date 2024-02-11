import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cart from "../src/screens/Cart";

const mockStore = configureStore([]);

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("Cart component", () => {
  const mockCartItems = [
    {
      id: 1,
      brand: "Brand 1",
      model: "Model 1",
      price: 100,
      count: 2,
    },
    {
      id: 2,
      brand: "Brand 2",
      model: "Model 2",
      price: 150,
      count: 1,
    },
  ];

  let store;

  beforeEach(() => {
    store = mockStore({ market: { cart: mockCartItems } });
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(getByText("Model 1")).toBeTruthy();
    expect(getByText("350 ₺")).toBeTruthy();
  });

  it("displays 'No Results Found' when cart is empty", () => {
    store = mockStore({ market: { cart: [] } });

    const { getByText } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(getByText("No Results Found")).toBeTruthy();
  });
});
