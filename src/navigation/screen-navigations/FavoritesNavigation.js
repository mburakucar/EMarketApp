import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites, ProductDetail } from "@screens";

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesList" component={Favorites} />
      <Stack.Screen name="FavoriteDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
