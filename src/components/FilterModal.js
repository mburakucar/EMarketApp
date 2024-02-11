import { useEffect, useMemo } from "react";
import { ScrollView, Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "@utils/styles";
import colors from "@utils/colors";
import RadioGroup from "react-native-radio-buttons-group";
import { marketSelector } from "@redux/selectors";
import { setFilter } from "@redux/Market/marketActions";
import { useDispatch, useSelector } from "react-redux";
import { useStateIfMounted } from "use-state-if-mounted";
import CustomButton from "./CustomButton";
import FilterModalRadioGroup from "./FilterModalRadioGroup";

const FilterModal = ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();

  const { filters, filterParams } = useSelector(marketSelector);

  const [modelsList, setModelsList] = useStateIfMounted([]);

  const [brandRadios, setBrandRaios] = useStateIfMounted([]);

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Old to new",
        value: "sortByOld",
        size: 20,
        color: colors.mainColor,
      },
      {
        id: "2",
        label: "New to old",
        value: "sortByNew",
        size: 20,
        color: colors.mainColor,
      },
      {
        id: "3",
        label: "Price high to low",
        value: "sortByHigh",
        size: 20,
        color: colors.mainColor,
      },
      {
        id: "4",
        label: "Price low to high",
        value: "sortByLow",
        size: 20,
        color: colors.mainColor,
      },
    ],
    []
  );

  useEffect(() => {
    let brands = [];
    filters?.brands?.map((e, idx) => {
      brands.push({
        id: e,
        label: e,
        value: e,
        size: 20,
        color: colors.mainColor,
      });
    });
    setBrandRaios(brands);
  }, [filters?.brands]);

  useEffect(() => {
    if (filterParams?.brand?.name) {
      dispatch(
        setFilter({
          ...filterParams,
          model: {},
        })
      );
      let models = [];
      filters?.models
        ?.filter((e) => e.brand == filterParams?.brand?.name)
        ?.map((e) => {
          models.push({
            id: e.model,
            label: e.model,
            value: e.model,
            size: 20,
            color: colors.mainColor,
          });
        });
      setModelsList(models);
    } else {
      setModelsList([]);
    }
  }, [filterParams?.brand?.name]);

  const resetFilter = () => {
    dispatch(setFilter({}));

    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 250);
  };

  const filter = () => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 250);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ProductStyles.modalCenteredView}>
        <View style={ProductStyles.modalView}>
          <View style={ProductStyles.modalHeader}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={ProductStyles.modalCloseContainer}
            >
              <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
            <Text style={ProductStyles.modalHeaderText}>Filter</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={ProductStyles.modalScroll}
          >
            <View style={ProductStyles.filterWrapper}>
              <View style={ProductStyles.filterMainContainer}>
                <FilterModalRadioGroup
                  title={"Sort By"}
                  radioButtons={radioButtons}
                  onPress={(e) => {
                    let obj = {
                      type: e == "1" || e == "2" ? "sortBy" : "orderBy",
                      key: e == "1" || e == "2" ? "createdAt" : "price",
                      sort: e == "1" || e == "4" ? "asc" : "desc",
                    };

                    dispatch(
                      setFilter({
                        ...filterParams,
                        sort: {
                          details: obj,
                          selectedid: e,
                        },
                      })
                    );
                  }}
                  selectedid={filterParams?.sort?.selectedid}
                />

                <FilterModalRadioGroup
                  title={"Brand"}
                  radioButtons={brandRadios}
                  onPress={(e) => {
                    dispatch(
                      setFilter({
                        ...filterParams,
                        brand: {
                          name: e,
                          selectedid: e,
                        },
                      })
                    );
                  }}
                  selectedid={filterParams?.brand?.selectedid}
                  search={true}
                />

                {modelsList?.length ? (
                  <FilterModalRadioGroup
                    title={"Model"}
                    radioButtons={modelsList}
                    onPress={(e) => {
                      dispatch(
                        setFilter({
                          ...filterParams,
                          model: {
                            name: e,
                            selectedid: e,
                          },
                        })
                      );
                    }}
                    selectedid={filterParams?.model?.selectedid}
                    search={true}
                  />
                ) : null}
              </View>

              <View style={ProductStyles.filterModalButtonContainer}>
                <CustomButton
                  onPress={resetFilter}
                  text={"Reset Filter"}
                  containerStyle={ProductStyles.filterModalButtons}
                />
                <CustomButton
                  onPress={filter}
                  text={"Filter"}
                  containerStyle={ProductStyles.filterModalButtons}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
