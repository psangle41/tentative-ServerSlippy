import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import TouchExtend from "./TouchExtend";

const { width, height } = Dimensions.get("window");

export default function SingleOrderExample({
  orderDetail,
  navigation,
  pageRoutedFrom,
}) {
  let Order = orderDetail;
  const [isTouched, setIsTouched] = useState(false);
  const handleTouchEvent = () => {
    setIsTouched(!isTouched);
  };
  const handleNewView = () => {
    if (pageRoutedFrom === "ChefNew") {
      navigation.push("OrderChefInfo", {
        order: Order,
        navigation: navigation,
        pageTitle: "Order Details",
      });
    } else {
      //name based on order state and server is routing
      navigation.push("OrderInfo", {
        order: Order,
        navigation: navigation,
        pageTitle: "Order Details",
        tableNo: Order.tableNo,
        finalOrder: Order,
      });
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={
          Order.orderState === "ready"
            ? styles.mainSingleOrderReady
            : styles.mainSingleOrder
        }
        onPress={() => handleNewView()}
      >
        <View style={styles.tableNum}>
          <Text style={styles.tabtit}>{Order.tableNo}</Text>
        </View>
        <View>
          <Text>{`Order is ${Order.orderState}, Click to check ${Order.orderState} functionality`}</Text>
        </View>
      </TouchableOpacity>
      {
        //   isTouched ? (
        // <TouchExtend navigation={navigation} order={Order} />
        // ) : (
        //   <View></View>
        // )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mainSingleOrder: {
    width: width,
    height: width / 5,
    borderLeftColor: "#FF6400",
    borderLeftWidth: 5,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    borderTopColor: "#C4C4C4",
    borderTopWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  mainSingleOrderReady: {
    width: width,
    height: width / 5,
    borderLeftColor: "#12BB90",
    borderLeftWidth: 5,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    borderTopColor: "#C4C4C4",
    borderTopWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  tableNum: {
    width: width / 6.75,
    height: width / 6,
    borderBottomRightRadius: width / 6,
    borderTopRightRadius: width / 6,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  tabtit: { fontWeight: "700", fontSize: 24, color: "#4E4A4A" },
});
