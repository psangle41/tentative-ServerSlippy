import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
import { TouchableHighlight } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function StatusChangeBtn(props) {
  return (
    <View style={{ flex: 1.5 }}>
      <TouchableHighlight onPress={() => props.action()}>
        <View style={styles.BaseBtn}>
          <Text style={styles.CustBtn}>{props.statusText}</Text>
          <RightArrowSVG style={{ marginHorizontal: 5 }} />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  BaseBtn: {
    // width: width / 3,
    // height: width / 7,
    // paddingHorizontal: 0,
    paddingVertical: 10,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    marginRight: 20,
    // elevation: 2,
    // marginVertical: 10,
  },
  CustBtn: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});
