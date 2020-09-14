import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TopNav from "../TopNav/TopNav";
import ServerManSVG from "../../assets/Svgs/ServerManSVG";
const { width, height } = Dimensions.get("window");

export default function Billing() {
  return (
    <View style={styles.main}>
      <View style={styles.TopDesign} />
      <TopNav />
      <Text style={{ color: "#fff" }}>this is the Billing screen</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.95 }}></View>
        <View>
          <ServerManSVG width={width / 4} height={width / 4} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  TopDesign: {
    width: width * 1.1,
    height: width,
    borderBottomLeftRadius: width / 3.5,
    borderBottomRightRadius: width / 3.5,
    position: "absolute",
    top: -width / 2.5,
    backgroundColor: "#FF264D",
  },
});
