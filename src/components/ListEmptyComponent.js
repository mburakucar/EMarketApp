import { Text } from "react-native";
import { commonStyles } from "@utils/styles";

export default function ListEmptyComponent({ text }) {
  return <Text style={commonStyles.ListEmptyComponentStyle}>{text}</Text>;
}
