import { View, TextInput } from "react-native";
import { commonStyles } from "@utils/styles";
import { Feather } from "@expo/vector-icons";

export default function CustomTextInput({ placeHolder, value, onChangeText }) {
  return (
    <View style={commonStyles.searchSection}>
      <Feather
        style={commonStyles.searchIcon}
        name="search"
        size={17}
        color="black"
      />
      <TextInput
        style={commonStyles.input}
        placeholder={placeHolder}
        placeholderTextColor={"#7f7f7f"}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
