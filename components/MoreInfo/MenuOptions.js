import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width, heigth } = Dimensions.get("window");

export default function MenuOptions(props) {
  return (
    <ImageBackground
      style={styles.MenuOptions}
      imageStyle={{ borderRadius: 10 }}
      source={props.item.image}
    >
      <Text style={styles.MenuText}>{props.item.name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  MenuOptions: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: 10,
    elevation: 4,
    marginLeft: 20,
    marginBottom: 20,
  },
  MenuText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 20,
    position: "absolute",
    bottom: 5,
  },
});
