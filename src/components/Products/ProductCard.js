import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { ProductStyles } from "@utils/styles";
import colors from "@utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { useStateIfMounted } from "use-state-if-mounted";
import CustomButton from "../CustomButton";

import { marketSelector } from "@redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import { updateItemFavorite, addorRemoveToCart } from "@utils/functions";

function ProductCard({ item, type, navigation }) {
  const dispatch = useDispatch();

  const { favorites, cart } = useSelector(marketSelector);

  const [imageLoaded, setImageLoaded] = useStateIfMounted(false);

  let isInFavorites = favorites?.find((e) => e.id == item?.id);
  let isInCart = cart?.find((e) => e.id == item?.id);

  return (
    <TouchableOpacity
      style={ProductStyles.productCard}
      onPress={() => {
        navigation.navigate(
          type == "favorites" ? "FavoriteDetail" : "ProductDetail",
          { item }
        );
      }}
    >
      <View style={ProductStyles.productCardColumns}>
        <View>
          <Image
            onLoadEnd={() => setImageLoaded(true)}
            style={ProductStyles.image}
            source={{
              uri: item.image,
            }}
          />
          {!imageLoaded && (
            <View style={ProductStyles.imageIndicator}>
              <ActivityIndicator size="small" color="#FFD700" />
            </View>
          )}
          <TouchableOpacity
            testID="starButton"
            onPress={() => {
              dispatch(updateItemFavorite(favorites, item));
            }}
            style={ProductStyles.star}
          >
            <Ionicons
              name="star"
              size={25}
              color={isInFavorites ? "orange" : "white"}
            />
          </TouchableOpacity>
        </View>
        <Text style={ProductStyles.price}>{item.price} ₺</Text>
        <Text style={ProductStyles.name}>{item.model}</Text>
        <Text style={ProductStyles.brandName}>{item.brand}</Text>
      </View>
      <CustomButton
        testID="addToCartButton"
        onPress={() => {
          dispatch(addorRemoveToCart(cart, item));
        }}
        text={isInCart ? "Remove from Cart" : "Add to Cart"}
        containerStyle={{
          marginTop: 10,
          borderRadius: 5,
          backgroundColor: isInCart ? colors.removeColor : colors.mainColor,
        }}
      />
    </TouchableOpacity>
  );
}

export default React.memo(ProductCard);
