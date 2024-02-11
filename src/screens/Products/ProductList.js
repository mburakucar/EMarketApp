import { useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  CustomTextInput,
  FilterButton,
  FilterModal,
  ListEmptyComponent,
  ProductCard,
} from "@components";
import { commonStyles, homeStyles } from "@utils/styles";
import { useStateIfMounted } from "use-state-if-mounted";
import { startGetData, startGetFilters } from "@redux/Market/marketActions";
import { marketSelector } from "@redux/selectors";
import { useDispatch, useSelector } from "react-redux";

let delay;

export default function ProductList({ navigation }) {
  const dispatch = useDispatch();

  const { loading, data, filterParams } = useSelector(marketSelector);

  const [search, setSearch] = useStateIfMounted("");
  const [limit, setLimit] = useStateIfMounted(12);
  const [modal, setModal] = useStateIfMounted("");

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    clearTimeout(delay);

    delay = setTimeout(() => {
      refresh();
    }, 500);
  }, [search]);

  useEffect(() => {
    getData();
  }, [limit, filterParams]);

  const refresh = () => {
    if (limit != 12) {
      setLimit(12);
    } else {
      getData();
    }
  };

  const getData = () => {
    dispatch(
      startGetData({
        page: 1,
        limit: limit,
        search: search,
        filters: filterParams,
      })
    );
  };

  const getFilters = useCallback(() => {
    dispatch(startGetFilters());
  }, []);

  return (
    <SafeAreaView style={commonStyles.safeAreaView}>
      <Header text={"E-Market"} />
      <FilterModal modalVisible={modal} setModalVisible={setModal} />
      <View style={commonStyles.content}>
        <CustomTextInput
          placeHolder="Search"
          value={search}
          onChangeText={(e) => setSearch(e)}
        />

        <View style={homeStyles.filterRow}>
          <Text style={homeStyles.filterText}>Filters:</Text>
          <FilterButton onPress={() => setModal(true)} />
        </View>

        {loading && (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator />
          </View>
        )}
        <FlatList
          style={{ marginTop: 20 }}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refresh} />
          }
          numColumns={2}
          columnWrapperStyle={commonStyles.ListWrapper}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <ProductCard
              item={item}
              type={"productList"}
              navigation={navigation}
            />
          )}
          ListEmptyComponent={
            !loading && <ListEmptyComponent text="No Results Found" />
          }
          onEndReached={() => {
            if (!Object.keys(filterParams).length && !search.length) {
              setLimit(limit + 12);
            }
          }}
          onEndReachedThreshold={0.1}
        />
      </View>
    </SafeAreaView>
  );
}
