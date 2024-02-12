import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "@navigation";
import colors from "@utils/colors";
import { GeneralStatusBar } from "@components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setFavorites, setCart } from "@redux/Market/marketActions";
import { useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const boot = async () => {
      const favorites = await AsyncStorage.getItem("favorites");

      if (favorites) {
        dispatch(setFavorites(JSON.parse(favorites)));
      }

      const cart = await AsyncStorage.getItem("cart");

      if (cart) {
        dispatch(setCart(JSON.parse(cart)));
      }
    };

    boot();
  }, []);

  return (
    <NavigationContainer>
      <GeneralStatusBar
        backgroundColor={colors.mainColor}
        barStyle="light-content"
      />
      <TabNavigation />
    </NavigationContainer>
  );
}
