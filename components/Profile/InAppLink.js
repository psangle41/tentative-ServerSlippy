import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function InAppLink({ image, text }) {
  return (
    <View>
      <TouchableOpacity style={styles.inApp}>
        <View style={styles.icon}>
          <Image style={styles.ic} source={image} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inApp: {
    flexDirection: "row",
    width: "100%",
    height: width / 8,
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    // alignItems: "flex-start",
    alignItems: "center",
  },
  icon: {
    flex: 1,
    alignItems: "flex-start",
    width: 35,
    justifyContent: "center",
    // paddingVertical: 10,
  },
  ic: {
    alignItems: "flex-start",
    paddingLeft: 20,
    justifyContent: "center",
  },
  text: {
    flex: 4.5,
    alignItems: "flex-start",
    fontSize: 18,
    justifyContent: "center",
  },
});
