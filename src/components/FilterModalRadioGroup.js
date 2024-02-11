import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { ProductStyles } from "@utils/styles";
import CustomTextInput from "./CustomTextInput";
import { useStateIfMounted } from "use-state-if-mounted";

export default function FilterModalRadioGroup({
  title,
  radioButtons,
  selectedid,
  onPress,
  search = false,
}) {
  const [filterSearch, setFilterSearch] = useStateIfMounted("");
  const [filterData, setFilterData] = useStateIfMounted(radioButtons);

  useEffect(() => {
    setFilterData(radioButtons);
  }, [radioButtons]);

  useEffect(() => {
    if (radioButtons?.length) {
      let newArray = radioButtons?.filter((item) =>
        item.label
          .toLocaleLowerCase("tr-TR")
          .includes(filterSearch.toLocaleLowerCase("tr-TR"))
      );

      setFilterData(newArray);
    }
  }, [filterSearch]);

  return (
    <View style={ProductStyles.filterContainer}>
      <Text style={ProductStyles.filterTextStyle}>
        {title} - {radioButtons?.length}
      </Text>
      {search ? (
        <View style={{ marginTop: 15, width: "100%" }}>
          <CustomTextInput
            placeHolder="Search"
            value={filterSearch}
            onChangeText={(e) => setFilterSearch(e)}
          />
        </View>
      ) : null}
      <ScrollView style={ProductStyles.filterScroll} nestedScrollEnabled={true}>
        <RadioGroup
          radioButtons={filterData}
          onPress={onPress}
          selectedId={selectedid}
          containerStyle={[
            ProductStyles.radioGroupContainer,
            { marginTop: 10 },
          ]}
        />
      </ScrollView>
    </View>
  );
}
