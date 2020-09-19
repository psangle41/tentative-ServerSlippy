import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, heigth } = Dimensions.get("window");

export default function Counter(props) {
  const [touched, setTouched] = useState(false);
  const [countDish, setCountDish] = useState(0);

  const increaseCount = () => {
    const val = countDish;
    setCountDish(val + 1);
    props.addPerDish((val + 1) * props.cost, val + 1);
  };
  const decreaseCount = () => {
    const val = countDish;
    if (val - 1 < 0) {
      setCountDish(0);
      props.addPerDish((val - 1) * props.cost, val - 1);
    } else {
      setCountDish(val - 1);
      props.addPerDish((val - 1) * props.cost, val - 1);
    }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {touched === false ? (
        <TouchableOpacity
          onPress={() => {
            setTouched(true);
            increaseCount();
            props.customizable === true
              ? props.callCustomize()
              : console.log("not customizable");
          }}
        >
          <View style={styles.addBtnKa}>
            <Text style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}>
              ADD
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterKa}>
          <CounterButton
            countDish={countDish}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        </View>
      )}

      {props.customizable === true ? (
        <Text
          style={{
            color: "#FF264D",
            fontSize: 9,
            marginTop: 4,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          CUSTOMIZABLE
        </Text>
      ) : (
        <Text />
      )}
    </View>
  );
}

const CounterButton = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <TouchableOpacity
        style={styles.smallBtn}
        onPress={() => {
          props.decreaseCount();
        }}
      >
        <Text style={styles.SmallText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.CounterNum}>{props.countDish}</Text>
      <TouchableOpacity
        style={styles.smallBtn}
        onPress={() => {
          props.increaseCount();
        }}
      >
        <Text style={styles.SmallText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtnKa: {
    width: width / 7,
    height: width / 15,
    borderColor: "#FF264D",
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  counterKa: {
    width: width / 7,
    height: width / 15,
    borderColor: "#FF264D",
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  smallBtn: {
    color: "#FF264D",
    backgroundColor: "#fff",
    flex: 2,
    width: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  SmallText: {
    color: "#000",
  },
  CounterNum: {
    flex: 1,
    backgroundColor: "#FF264D",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
});
