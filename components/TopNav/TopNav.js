import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MenuToggle from "../TopNav/MenuToggle";
import DrawerSVG from "../../assets/Svgs/DrawerSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function TopNav({ navigation }) {
  return (
    <View style={styles.topNav}>
      <View
        style={{
          flex: 0.9,
          alignItems: "flex-start",
          paddingLeft: width / 12,
        }}
      >
        <TouchableOpacity>
          <DrawerSVG />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0, alignItems: "flex-start" }}>
        <MenuToggle navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    marginTop: width / 20,
    alignItems: "center",
    width: width,
  },
});
