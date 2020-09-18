import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function SingleMenuOption(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  });

  return (
    <View style={styles.MenuOp}>
      <Text style={{ marginRight: 10, fontFamily: "Poppins-Light" }}>
        {props.tit}
      </Text>
      <View>{props.children}</View>
    </View>
  );
}
function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}
const styles = StyleSheet.create({
  MenuOp: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    height: width / 11,
    alignItems: "center",
    // justifyContent: "center",
  },
});
