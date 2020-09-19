import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionsRadio from "./CustomOptions/OptionsRadio";
import OptionsCheck from "./CustomOptions/OptionsCheck";

export default function OptionsMain({ option, handleSelectedEvent }) {
  // const [totalval, setTotalVal]
  return (
    <View>
      <View style={styles.OptionsMain}>
        <Text style={{ fontSize: 16.5, fontWeight: "700" }}>{option.name}</Text>
        <Text style={styles.dishDesc}>{option.description}</Text>
      </View>
      {option.type == "radio" ? (
        <OptionsRadio
          option={option}
          handleSelectedEvent={handleSelectedEvent}
        />
      ) : (
        <OptionsCheck
          option={option}
          handleSelectedEvent={handleSelectedEvent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  OptionsMain: {
    marginTop: 20,
    marginBottom: 10,
  },
  dishDesc: {
    fontSize: 12,
    color: "#C4C4C4",
    fontWeight: "600",
  },
});
