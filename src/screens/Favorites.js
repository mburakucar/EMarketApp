import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListEmptyComponent, ProductCard } from "@components";
import { commonStyles } from "@utils/styles";
import { marketSelector } from "@redux/selectors";
import { useSelector } from "react-redux";

export default function Favorites({ navigation }) {
  const { favorites } = useSelector(marketSelector);

  return (
    <SafeAreaView style={commonStyles.safeAreaView}>
      <Header text={"Favorites"} />
      <View style={commonStyles.content}>
        <FlatList
          style={{ marginTop: 20 }}
          numColumns={2}
          columnWrapperStyle={commonStyles.ListWrapper}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          data={favorites}
          renderItem={({ item, index }) => (
            <ProductCard
              item={item}
              type={"favorites"}
              navigation={navigation}
            />
          )}
          ListEmptyComponent={<ListEmptyComponent text="No Favorites Found" />}
        />
      </View>
    </SafeAreaView>
  );
}
