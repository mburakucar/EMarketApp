import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductList, ProductDetail } from "@screens";

const Stack = createNativeStackNavigator();

export default function ProductsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
