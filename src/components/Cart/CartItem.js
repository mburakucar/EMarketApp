import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { setCart } from "@redux/Market/marketActions";
import { marketSelector } from "@redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import colors from "@utils/colors";
import { CartStyles } from "@utils/styles";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { cart } = useSelector(marketSelector);

  const removeFromCart = async () => {
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

  const updateCount = async (type) => {
    let newArr = cart?.map((e) => {
      if (e.id == item.id) {
        let currentCount = item.count;
        if (type == "minus") {
          currentCount--;
        } else {
          currentCount++;
        }
        return { ...e, count: currentCount };
      } else {
        return e;
      }
    });

    await AsyncStorage.setItem("cart", JSON.stringify(newArr));
    dispatch(setCart(newArr));
  };

  return (
    <View style={CartStyles.wrapper}>
      <View style={CartStyles.row}>
        <TouchableOpacity onPress={removeFromCart}>
          <MaterialIcons name="cancel" size={25} color={colors.removeColor} />
        </TouchableOpacity>
        <View style={CartStyles.buttonTextContainer}>
          <Text style={CartStyles.priceTitle}>{item?.model}</Text>
          <Text style={CartStyles.price}>{item?.price} ₺</Text>
        </View>
      </View>
      <View style={CartStyles.row}>
        <TouchableOpacity
          onPress={() => {
            updateCount("minus");
          }}
          disabled={item?.count == 1 ? true : false}
          style={CartStyles.countButtons}
        >
          <AntDesign
            name="minus"
            size={12}
            color={item?.count == 1 ? "darkgrey" : "black"}
          />
        </TouchableOpacity>
        <View style={CartStyles.count}>
          <Text style={CartStyles.countText}>{item?.count}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            updateCount("plus");
          }}
          style={CartStyles.countButtons}
        >
          <AntDesign name="plus" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(CartItem);
