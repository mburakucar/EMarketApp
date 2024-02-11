import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Favorites from "../src/screens/Favorites";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("Favorites component", () => {
  const mockFavorites = [
    {
      id: 1,
      brand: "Brand 1",
      model: "Model 1",
      price: 100,
    },
    {
      id: 2,
      brand: "Brand 2",
      model: "Model 2",
      price: 150,
    },
  ];

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    expect(getByText("Favorites")).toBeTruthy();
  });

  it("displays 'No Favorites Found' when favorites list is empty", () => {
    let store = mockStore({ market: { cart: [] } });

    const { getByText } = render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    expect(getByText("No Favorites Found")).toBeTruthy();
  });
});
