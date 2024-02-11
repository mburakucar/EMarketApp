import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "@redux/store";
import * as Font from "expo-font";
import { useStateIfMounted } from "use-state-if-mounted";
import fonts from "@utils/fonts";
import Main from "./Main";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useStateIfMounted(false);

  async function loadFontsAsync() {
    await Font.loadAsync(fonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
