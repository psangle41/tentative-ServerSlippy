import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function TouchOptBtn(props) {
  return (
    <TouchableOpacity
      style={styles.touchBtnMain}
      onPress={() => props.action()}
    >
      <Text style={styles.tit}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchBtnMain: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 10,
  },
  tit: { color: "#fff", fontWeight: "700" },
});
