import { TouchableOpacity, Text } from "react-native";
import { homeStyles } from "@utils/styles";

export default function FilterButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={homeStyles.filterButtonContainer}
      testID="filterButton"
    >
      <Text style={homeStyles.filterButtonText}>Select Filter</Text>
    </TouchableOpacity>
  );
}
