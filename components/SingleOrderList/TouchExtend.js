import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TickSVG from "../../assets/Svgs/TickSVG";
import XSVG from "../../assets/Svgs/XSVG";
// import { TouchableHighlight } from "react-native-gesture-handler";
import TouchOptBtn from "../Server.js/TouchOptBtn";

const { width, height } = Dimensions.get("window");

export default function TouchExtend(props) {
  const handleNewView = () => {
    props.navigation.push("OrderChefInfo", {
      order: props.order,
      navigation: props.navigation,
      pageTitle: "Order Details",
    });
  };
  return (
    <View style={styles.mainTouchExt}>
      <View style={styles.indiOptions}>
        <TickSVG />
        <TouchOptBtn text={"View Order"} action={handleNewView} />
      </View>
      <View style={styles.indiOptions}>
        <XSVG />
        <TouchOptBtn text={"Cancle"} action={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTouchExt: {
    width: width,
    height: width / 6,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    // marginVertical: 2,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  indiOptions: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
