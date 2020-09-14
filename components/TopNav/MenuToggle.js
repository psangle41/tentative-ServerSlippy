import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MenuSVG from "../../assets/Svgs/MenuSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function MenuToggle({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.push("QrScreen", {
            pageTitle: "QR Scanner",
            navigation: navigation,
          })
        }
      >
        <MenuSVG width={width / 11} height={width / 11} />
      </TouchableOpacity>
      <Text style={{ color: "#fff" }}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
