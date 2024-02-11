import AsyncStorage from "@react-native-async-storage/async-storage";
import { setFavorites, setCart } from "@redux/Market/marketActions";

export const updateItemFavorite =
  (favorites = [], item = {}) =>
  async (dispatch) => {
    var check = favorites.find((e) => e.id == item.id);

    let newArr = [];
    if (check) {
      newArr = favorites.filter((e) => e.id != item.id);
    } else {
      newArr = [...favorites, item];
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(newArr));
    dispatch(setFavorites(newArr));
  };

export const addorRemoveToCart =
  (cart = [], item = {}) =>
  async (dispatch) => {
    var check = cart.find((e) => e.id == item.id);

    let newArr = [];
    if (check) {
      newArr = cart.filter((e) => e.id != item.id);
    } else {
      newArr = [
        ...cart,
        { id: item.id, model: item.model, price: item.price, count: 1 },
      ];
    }
    await AsyncStorage.setItem("cart", JSON.stringify(newArr));
    dispatch(setCart(newArr));
  };
