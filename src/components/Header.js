import { View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "@utils/styles";
import { AntDesign } from "@expo/vector-icons";

export default function Header({ navigation, text = "" }) {
  const canGoBack = navigation?.canGoBack();
  const iconSize = 25;

  return (
    <View style={commonStyles.header}>
      <TouchableOpacity
        style={commonStyles.headerInner}
        onPress={() => {
          canGoBack && navigation.goBack();
        }}
      >
        {canGoBack && (
          <AntDesign name="arrowleft" size={iconSize} color="white" />
        )}
        <Text
          style={[commonStyles.headerText, canGoBack && { marginLeft: 20 }]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
