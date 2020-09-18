import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function PromoToggle(props) {
  return (
    <View style={styles.container} Key={props.promo.id}>
      <View
        style={
          props.promo.setPromo === false
            ? {
                width: 26,
                height: 26,
                borderRadius: 20,
                backgroundColor: "#dddddd",
                alignItems: "center",
                justifyContent: "center",
              }
            : {
                width: 26,
                height: 26,
                borderRadius: 20,
                backgroundColor: "#FF264D",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        {props.promo.setPromo === true ? (
          <Image source={require("../../assets/check.png")} />
        ) : (
          <Image />
        )}
      </View>
      <View
        style={{
          //   alignItems: "center",
          justifyContent: "center",
          marginLeft: 20,
        }}
      >
        <Text style={styles.textAdd}>{props.promo.name}</Text>
        <Text style={styles.textdes}>{props.promo.des}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  textAdd: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  textdes: {
    fontSize: 12,
    fontWeight: "700",
    // lineHeight: 20,
    color: "#BABABA",
  },
});
