import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  ListEmptyComponent,
  CartItem,
  CustomButton,
} from "@components";
import { commonStyles, ProductDetailStyles } from "@utils/styles";
import { marketSelector } from "@redux/selectors";
import { useSelector } from "react-redux";

export default function Cart({ navigation }) {
  const { cart } = useSelector(marketSelector);

  let total = 0;

  cart?.map((e) => {
    total += e.price * e.count;
  });

  return (
    <SafeAreaView style={commonStyles.safeAreaView}>
      <Header text={"Cart"} />
      <View style={commonStyles.content}>
        <FlatList
          style={{ marginTop: 20 }}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={({ item, index }) => (
            <CartItem item={item} navigation={navigation} />
          )}
          ListEmptyComponent={<ListEmptyComponent text="No Results Found" />}
        />
        <View style={ProductDetailStyles.buttonContainer}>
          <View style={ProductDetailStyles.buttonTextContainer}>
            <Text style={ProductDetailStyles.priceTitle}>Total:</Text>
            <Text style={ProductDetailStyles.price}>{total} ₺</Text>
          </View>
          <CustomButton
            text={"Complete"}
            containerStyle={ProductDetailStyles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
