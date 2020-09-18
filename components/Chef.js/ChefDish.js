import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MessageSVG from "../../assets/Svgs/MessageSVG";
import CheckedSVG from "../../assets/Svgs/CheckedSVG";
import UncheckedSVG from "../../assets/Svgs/UncheckedSVG";
const { width, height } = Dimensions.get("window");

export default function ChefDish(props) {
  let dish = props.dish;
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
    props.getCheckedNo(!check);
  };
  //   {
  //     id: 2,
  //     name: "Mutton Biryani",
  //     count: 2,
  //     total: 80,
  //     isCustomized: true,
  //     customOptions: {
  //       size: "ExtraLarge",
  //       select: ["cheeseBurst", "Spicy", "Jyada Lao"],
  //     },
  //     rating: 4,
  //     price: 40,
  //     checkHai: true,
  //   },

  return (
    <View
      style={{
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        marginVertical: 10,
      }}
    >
      <View style={styles.checkCarrier}>
        <TouchableOpacity style={styles.opTouch} onPress={() => handleCheck()}>
          <View style={check === false ? styles.falseVal : styles.trueVal}>
            {check === true ? <CheckedSVG /> : <UncheckedSVG />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.dishInfoCarrier}>
        <Text>{dish.name}</Text>
        <Text style={styles.dishPrice}>$ {dish.price}</Text>
        <View>
          {dish.isCustomized ? (
            <View>
              <Text style={styles.customTit}>{dish.customOptions.size}</Text>
            </View>
          ) : (
            <View></View>
          )}
          {dish.isCustomized ? (
            <View style={{ flexDirection: "row" }}>
              {dish.customOptions.select.map((e) => (
                <Text style={styles.customTit1}>{e}</Text>
              ))}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <View style={styles.messageCarrier}>
        <MessageSVG />
      </View>
      <View style={styles.countCarrier}>
        <Text style={styles.countVal}>{dish.count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  opTouch: {
    // alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
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
  checkCarrier: { flex: 0.5 },
  dishInfoCarrier: { flex: 3 },
  messageCarrier: { flex: 1 },
  countCarrier: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    height: 30,
    alignItems: "flex-start",
    paddingLeft: 7,
    justifyContent: "center",
    borderRadius: 7,
  },
  dishPrice: {
    fontSize: 14,
  },
  countVal: { fontSize: 18, color: "#282828", fontWeight: "700" },
  customTit: {
    color: "#FF264D",
    marginRight: 5,
    fontSize: 12,
  },
  customTit1: {
    color: "#C4C4C4",
    fontSize: 12,
    marginRight: 5,
  },
});
