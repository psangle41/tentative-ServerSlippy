import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Counter from "./Counter";
import FilledStarSVG from "../../assets/Svgs/FilledStarSVG";
import StarSVG from "../../assets/Svgs/StarSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckedSVG from "../../assets/Svgs/CheckedSVG";
import UncheckedSVG from "../../assets/Svgs/UncheckedSVG";
import OrderCounter from "../OrderInfo/OrderCounter";
const { width, height } = Dimensions.get("window");

export default function ModifyIndividual({
  dish,
  updateVal,
  callCustomize,
  getCustomDishInfo,
  up,
  OrderDishUpdate,
  FinalCalculations,
}) {
  let ratingObj = dish.rating;
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    // If ratings is lower, set the path to unfilled stars
    if (i < ratingObj) {
      stars.push(<FilledStarSVG />);
    } else {
      stars.push(<StarSVG />);
    }
    // stars.push(<Text style={{ width: 5 }} />);
  }
  const [check, setCheck] = useState(false);
  const getChecked = () => {
    const v = check;
    setCheck(!check);
    FinalCalculations(!check, dish.id, dish.name);
    // if (!v === true) {
    //   addValChecked(each);
    // } else {
    //   removeValChecked(each);
    // }
    //   let itBe = handleAll(each);
    //   setCheck(itBe);
  };
  const [perDish, setPerDish] = useState(0);

  const addPerDish = (val, c) => {
    setPerDish(val);
    updateVal(
      val,
      dish.id,
      dish.name,
      c,
      dish.customizable,
      dish.rating,
      dish.price
    );
    getCustomDishInfo(dish);
    // handleC()
  };
  const addPerDish1 = (val, c) => {
    setPerDish(val);
    // getCustomDishInfo(dish);
    // handleC()
    const checkedHai = check;
    OrderDishUpdate(
      val,
      dish.id,
      dish.name,
      c,
      dish.customizable,
      dish.rating,
      dish.price,
      checkedHai
    );
  };

  return (
    <View style={styles.dish}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {up === true ? (
          <TouchableOpacity style={styles.opTouch} onPress={() => getChecked()}>
            <View style={check === false ? styles.falseVal : styles.trueVal}>
              {check === true ? <CheckedSVG /> : <UncheckedSVG />}
            </View>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      <View style={styles.dishMain}>
        <View style={{ flex: 2 }}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishStars}>{stars}</Text>
          <Text style={styles.dishPrice}>${dish.price}</Text>
        </View>
        {/*counter is implemented here*/}
        <View style={styles.counterMain}>
          {up === true ? (
            <OrderCounter
              customizable={dish.customizable}
              cost={dish.price}
              addPerDish={addPerDish1}
              callCustomize={callCustomize}
              countInit={dish.count}
            />
          ) : (
            <Counter
              customizable={dish.customizable}
              cost={dish.price}
              addPerDish={addPerDish}
              callCustomize={callCustomize}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dish: {
    width: width - 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  opTouch: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    marginLeft: 15,
  },
  falseVal: {
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  trueVal: {
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dishMain: { flex: 3, flexDirection: "row" },
  dishName: { fontSize: 15, fontWeight: "700", flexDirection: "row" },
  dishStars: { height: 20, justifyContent: "center", marginTop: 5 },
  dishPrice: { fontSize: 12, alignItems: "center" },
  counterMain: { flex: 1, justifyContent: "center" },
});
