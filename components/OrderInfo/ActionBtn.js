import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function ActionBtn(props) {
  return (
    <View style={{ marginVertical: 5, marginHorizontal: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: props.color,
          width: 150,
          height: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          elevation: 5,
          shadowColor: "grey",
          shadowRadius: 10,
          shadowOpacity: 0.5,
        }}
        onPress={() => props.action()}
      >
        <Text style={styles.tit}>{props.title}</Text>
        <RightArrowSVG style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tit: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
});
