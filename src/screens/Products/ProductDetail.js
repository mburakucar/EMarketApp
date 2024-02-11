import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, CustomButton } from "@components";
import {
  commonStyles,
  ProductDetailStyles,
  ProductStyles,
} from "@utils/styles";
import { useStateIfMounted } from "use-state-if-mounted";
import { Ionicons } from "@expo/vector-icons";

import { marketSelector } from "@redux/selectors";
import { useDispatch, useSelector } from "react-redux";

import { updateItemFavorite, addorRemoveToCart } from "@utils/functions";

export default function ProductDetail({ route, navigation }) {
  const dispatch = useDispatch();

  const { favorites, cart } = useSelector(marketSelector);

  const { item } = route.params;

  const [imageLoaded, setImageLoaded] = useStateIfMounted(false);

  let isInFavorites = favorites?.find((e) => e.id == item?.id);
  let isInCart = cart?.find((e) => e.id == item?.id);

  return (
    <SafeAreaView style={commonStyles.safeAreaView}>
      <Header text={item?.model} navigation={navigation} />
      <View style={commonStyles.content}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={ProductDetailStyles.wrapper}>
            <View style={ProductStyles.productCardColumns}>
              <View>
                <Image
                  onLoadEnd={() => setImageLoaded(true)}
                  style={ProductDetailStyles.image}
                  source={{
                    uri: item.image,
                  }}
                />
                {!imageLoaded && (
                  <View style={ProductDetailStyles.imageIndicator}>
                    <ActivityIndicator size="small" color="#FFD700" />
                  </View>
                )}
                <TouchableOpacity
                  testID="starButton"
                  onPress={() => {
                    dispatch(updateItemFavorite(favorites, item));
                  }}
                  style={ProductDetailStyles.star}
                >
                  <Ionicons
                    name="star"
                    size={25}
                    color={isInFavorites ? "orange" : "white"}
                  />
                </TouchableOpacity>
              </View>
              <Text style={ProductDetailStyles.name}>
                {item.brand} - {item.model}
              </Text>

              <Text style={ProductDetailStyles.desc}>{item.description}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={ProductDetailStyles.buttonContainer}>
          <View style={ProductDetailStyles.buttonTextContainer}>
            <Text style={ProductDetailStyles.priceTitle}>Price:</Text>
            <Text style={ProductDetailStyles.price}>{item?.price} ₺</Text>
          </View>
          <CustomButton
            testID="addToCartButton"
            onPress={() => {
              dispatch(addorRemoveToCart(cart, item));
            }}
            text={isInCart ? "Remove from Cart" : "Add to Cart"}
            containerStyle={[
              ProductDetailStyles.button,
              {
                backgroundColor: isInCart
                  ? colors.removeColor
                  : colors.mainColor,
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
