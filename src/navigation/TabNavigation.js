import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import colors from "@utils/colors";
import { commonStyles } from "@utils/styles";
import ProductsNavigation from "./screen-navigations/ProductsNavigation";
import FavoritesNavigation from "./screen-navigations/FavoritesNavigation";
import { Cart } from "@screens";
import { marketSelector } from "@redux/selectors";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { cart } = useSelector(marketSelector);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.mainColor,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          shadowColor: "black",
          shadowOffset: 5,
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 3,
          backgroundColor: "white",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={ProductsNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={37}
              color={focused ? colors.mainColor : colors.tabBarDefaultColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                name="basket-outline"
                size={40}
                color={focused ? colors.mainColor : colors.tabBarDefaultColor}
              />
              {cart?.length ? (
                <View style={commonStyles.bottomCount}>
                  <Text style={{ color: "white" }}>{cart?.length}</Text>
                </View>
              ) : null}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="star-outline"
              size={37}
              color={focused ? colors.mainColor : colors.tabBarDefaultColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
