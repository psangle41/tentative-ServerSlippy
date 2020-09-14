import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import TopNav from "./TopNav";
import ServerManSVG from "../../assets/Svgs/ServerManSVG";

const { width, height } = Dimensions.get("window");

export default function MainTopNav(props) {
  return (
    <View>
      <View>
        <TopNav navigation={props.navigation} />
      </View>
      <View style={styles.BelowTopNav}>
        <View style={styles.leftPart}>
          <Text style={styles.addline}>This is the server page...</Text>
          <View style={styles.ownerName}>
            <Text style={styles.ownerText}>Brinda's Cafe</Text>
          </View>
        </View>
        <View>
          <ServerManSVG width={width / 4} height={width / 4} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BelowTopNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: width / 20,
  },
  leftPart: {
    flex: 0.95,
    alignItems: "flex-start",
    paddingLeft: width / 7,
    height: width / 4,
  },
  addline: { color: "#fff", alignItems: "flex-start" },
  ownerName: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  ownerText: {
    color: "#FF264D",
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
