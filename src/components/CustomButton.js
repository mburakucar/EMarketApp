import { TouchableOpacity, Text } from "react-native";
import { commonStyles } from "@utils/styles";

export default function CustomButton({
  onPress,
  text,
  containerStyle,
  textStyle,
  testID = "",
}) {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[commonStyles.buttonContainer, containerStyle && containerStyle]}
    >
      <Text style={[commonStyles.buttonText, textStyle && textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
