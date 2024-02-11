import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ProductDetail from "../src/screens/Products/ProductDetail";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("ProductDetail component", () => {
  const item = {
    id: 1,
    brand: "Brand",
    model: "Model",
    description: "Description",
    price: 100,
    image: "image-url",
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductDetail route={{ params: { item } }} />
      </Provider>
    );
    expect(getByText(item.model)).toBeTruthy();
    expect(getByText(item.description)).toBeTruthy();
    expect(getByText(`${item.price} ₺`)).toBeTruthy();
  });

  it("adds item to favorites when star button is pressed", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductDetail route={{ params: { item } }} />
      </Provider>
    );
    const starButton = getByTestId("starButton");

    await act(async () => {
      fireEvent.press(starButton);
    });
  });

  it("adds item to cart when add to cart button is pressed", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductDetail route={{ params: { item } }} />
      </Provider>
    );
    const addToCartButton = getByTestId("addToCartButton");

    await act(async () => {
      fireEvent.press(addToCartButton);
    });
  });
});
