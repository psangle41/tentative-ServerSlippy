import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import ServerManSVG from "../../assets/Svgs/ServerManSVG";
import ActionBtn from "./ActionBtn";
const { width, height } = Dimensions.get("window");
import { CommonActions } from "@react-navigation/native";

export default function BottomActions({
  navigation,
  WaiterOrderChecked,
  totalUpdated,
  tableNo,
  completeOrder,
  orderState,
  actionCarried,
  prevOrder,
  prevTotal,
  orderReadyOrder,
}) {
  const gotoModify = () => {
    navigation.push("ModifyOrder", {
      pageTitle: "Modify",
      WaiterOrderChecked: WaiterOrderChecked,
      totalUpdated: totalUpdated,
      tableNo: tableNo,
      navigation: navigation,
    });
  };

  const ConfirmOrder = () => {
    if (actionCarried === "extended") {
      navigation.dispatch(
        CommonActions.reset({
          type: "Navigation/INIT",
          index: 1,
          routes: [
            {
              name: "ServerScreen",
              params: {
                tableNo: tableNo,
                OrderGot: WaiterOrderChecked,
                total: totalUpdated,
                completeOrder: completeOrder,
                prevOrder: prevOrder,
                completeTotal: prevTotal + totalUpdated,
              },
            },
          ],
        })
      );
    } else if (orderState === "ready") {
      // edit this function
      navigation.push("TableCart", {
        pageTitle: "Table Cart",
        orderReady: orderReadyOrder,
        totalUpdated: totalUpdated,
        tableNo: tableNo,
        navigation: navigation,
      });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          type: "Navigation/INIT",
          index: 1,
          routes: [
            {
              name: "ServerScreen",
              params: {
                tableNo: tableNo,
                OrderGot: WaiterOrderChecked,
                total: totalUpdated,
                completeOrder: completeOrder,
              },
            },
          ],
        })
      );
    }
  };
  const cancelOrder = () => {
    // navigation.pop();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          // { name: "ServerScreen" },
          {
            name: "ServerScreen",
          },
        ],
      })
    );
  };
  const extendOrder = () => {
    navigation.push("SelectDish", {
      pageTitle: "Extend Order",
      completeOrder: completeOrder,
      totalUpdated: totalUpdated,
      tableNo: tableNo,
      navigation: navigation,
    });
  };
  // const [actionBtns, setActionBtns] = useState([]);
  let actionBtns = [];
  for (let i = 0; i < 1; i++) {
    let modify = { title: "Modify", color: "#FF6400", action: gotoModify };
    let confirm = { title: "Confirm", color: "#12BB90", action: ConfirmOrder };
    let cancel = { title: "Cancle", color: "#FF264D", action: cancelOrder };
    let extend = { title: "Extend", color: "#FF6400", action: extendOrder }; //   edit the action to extends new action
    let Bill = { title: "Bill", color: "#12BB90", action: ConfirmOrder };
    if (orderState === "new") {
      // from menu screen(new)=>{modify,confirm,cancle},
      actionBtns = [modify, confirm, cancel];
    } else if (orderState === "prep") {
      // from homeServer(prep)=>{modify,confirm,cancle,Extend},
      actionBtns = [modify, Bill, cancel, extend];
    } else if (orderState === "ready") {
      // from homeServer(Ready)=>{modify,confirm,cancle,Extend}
      actionBtns = [modify, Bill, cancel, extend];
    }
  }

  return (
    <View style={styles.mainCont}>
      <View style={styles.left}>
        <View style={styles.Tit}>
          <Text style={styles.tit1}>ORDERING FOR</Text>
          <Text style={styles.tit2}>Dhiraj Temkar</Text>
        </View>
        {/*<ServerManSVG style={styles.serveMan} width={180} height={180} />*/}
      </View>
      <View style={styles.right}>
        <FlatList
          data={actionBtns}
          renderItem={({ item }) => {
            return (
              <View>
                {/*<Text>{item.total}</Text>*/}
                <ActionBtn
                  title={item.title}
                  color={item.color}
                  action={item.action}
                />
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    // flexDirection: "row",
    width: width,
  },
  left: {
    // flex: 0.5,
    width: width,
    height: 40,
  },
  Tit: {
    // marginVertical: 30,
    paddingHorizontal: 30,
  },
  tit1: {
    fontSize: 12,
    color: "#FF264D",
    fontWeight: "700",
  },
  tit2: {
    fontSize: 16,
    color: "#4E4A4A",
    fontWeight: "700",
  },
  right: {
    // flex: 0.5,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  serveMan: {
    // alignItems: "center",
    // borderWidth: 1,
    justifyContent: "center",
    position: "absolute",
    bottom: -80,
    // left: 50,
  },
});
