import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import PageBackSVG from "../../assets/Svgs/PageBackSVG";
import Dishes from "../MoreInfo/Dishes";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomActions from "./BottomActions";
const { width, height } = Dimensions.get("window");

export default function OrderInfo({ route }) {
  // Data needed in this screen are as follows;
  // route.params.tableNo     (done)
  // route.params.finalOrder      (done)
  // route.params.finalOrder.dishSelected
  // route.params.finalOrder.total
  // route.params.finalOrder.orderBuild
  // route.params.pageTitle     (done)
  // route.params.navigation      (done)

  const [OrderDetails, setOrderDetails] = useState(
    route.params.finalOrder.dishSelected
  );

  const [WaiterOrderChecked, setWaiterOrderChecked] = useState([]);

  const [completeOrder, setCompleteOrder] = useState(route.params.finalOrder);

  const [totalUpdated, setTotalUpdated] = useState(
    route.params.finalOrder.total
  );

  const OrderDishUpdate = (
    val,
    dishId,
    dishName,
    c,
    dishCustomizable,
    dishRating,
    dishPrice,
    checkedHai
  ) => {
    let tempVal = totalUpdated;
    let OrderBuilt = OrderDetails;
    let comp = completeOrder;
    let tempDish = {
      // batch: id,
      id: dishId,
      name: dishName,
      count: c,
      total: val,
      // isCustomized: dishCustomizable,
      // customOptions: ,
      rating: dishRating,
      price: dishPrice,
      checkHai: false,
    };
    if (
      OrderBuilt.filter((e) => e.name == dishName && e.id == dishId).length > 0
    ) {
      OrderBuilt.map((each, index) => {
        if (each.id == dishId) {
          if (each.name == dishName) {
            OrderBuilt[index] = tempDish;
          }
        }
      });
    } else {
      OrderBuilt.push(tempDish);
    }
    setOrderDetails(OrderBuilt);
  };

  const FinalCalculations = (checked, id, dishName) => {
    const comp = completeOrder;
    let waiterConfirmed = WaiterOrderChecked;
    let finalTotal = 0;
    if (checked === true) {
      for (let i = 0; i < OrderDetails.length; i++) {
        if (
          OrderDetails[i].name === dishName &&
          OrderDetails[i].id === id &&
          OrderDetails[i].checkHai !== true
        ) {
          OrderDetails[i].checkHai = checked;
          waiterConfirmed.push(OrderDetails[i]);
        }
      }
      setWaiterOrderChecked(waiterConfirmed);
      for (let j = 0; j < waiterConfirmed.length; j++) {
        finalTotal = finalTotal + waiterConfirmed[j].total;
      }
      setTotalUpdated(finalTotal);
    } else {
      for (let i = 0; i < OrderDetails.length; i++) {
        if (
          OrderDetails[i].name === dishName &&
          OrderDetails[i].id === id &&
          OrderDetails[i].checkHai === true
        ) {
          OrderDetails[i].checkHai = checked;
          waiterConfirmed = waiterConfirmed.filter(
            (a) => a.name !== dishName && a.dishId !== id && a.checkHai !== true
          );
        }
      }
      setWaiterOrderChecked(waiterConfirmed);
      for (let j = 0; j < waiterConfirmed.length; j++) {
        finalTotal = finalTotal + waiterConfirmed[j].total;
      }
      setTotalUpdated(finalTotal);
      setCompleteOrder({
        tableNo: route.params.tableNo,
        dishSelected: waiterConfirmed,
        total: finalTotal.toFixed(2),
        date: comp.date,
        hotelName: comp.hotelName,
        time: comp.time,
        locality: comp.hotelLocality,
        Status: "New",
        orderBuild: true, // update if order cancle
        orderState: "new",
      });
    }
  };

  return (
    <SafeAreaView style={styles.SelectDish}>
      <View style={styles.TopDesign}>
        <TouchableOpacity style={{ paddingLeft: 15 }}>
          <PageBackSVG
            onPress={() => route.params.navigation.pop()}
            style={styles.pageBack}
          />
        </TouchableOpacity>
        <Text style={styles.pageTit}>{route.params.pageTitle}</Text>
      </View>
      <View style={styles.mainOrderPage}>
        <View style={styles.topTit}>
          <Text style={styles.tit}>Order Details</Text>
          <Text style={styles.tit1}>Table: {route.params.tableNo}</Text>
        </View>
        <ScrollView
          style={{ height: width * 0.95, marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {route.params.orderState === "extended" ? (
            <View>
              <FlatList
                data={route.params.prevOrder.dishSelected}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <Dishes
                        key={item.id * (item.index * 2) * item.index}
                        dish={item}
                        up={route.params.prevOrder.orderBuild}
                        OrderDishUpdate={OrderDishUpdate}
                        FinalCalculations={FinalCalculations}
                        orderState={route.params.prevOrder.orderState}
                      />
                    </View>
                  );
                }}
                numColumns={1}
              />
              <Text style={styles.extendTit}>Extended Order</Text>
            </View>
          ) : (
            <View></View>
          )}
          <FlatList
            data={OrderDetails}
            renderItem={({ item }) => {
              return (
                <View>
                  <Dishes
                    key={item.id * (item.index * 7 + 1) * item.index}
                    dish={item}
                    up={route.params.finalOrder.orderBuild}
                    OrderDishUpdate={OrderDishUpdate}
                    FinalCalculations={FinalCalculations}
                    orderState={route.params.finalOrder.orderState}
                  />
                </View>
              );
            }}
            numColumns={1}
          />
          {WaiterOrderChecked.map((i) => {
            return (
              <Text>
                {i.name} {i.count}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.BottomActions}>
        <Text>{totalUpdated}</Text>
        {route.params.orderState === "extended" ? (
          <BottomActions
            navigation={route.params.navigation}
            WaiterOrderChecked={WaiterOrderChecked}
            totalUpdated={totalUpdated}
            tableNo={route.params.tableNo}
            completeOrder={completeOrder}
            orderState={route.params.finalOrder.orderState}
            actionCarried={route.params.orderState}
            prevOrder={route.params.prevOrder}
            prevTotal={route.params.prevTotal}
          />
        ) : (
          <BottomActions
            navigation={route.params.navigation}
            WaiterOrderChecked={WaiterOrderChecked}
            totalUpdated={totalUpdated}
            tableNo={route.params.tableNo}
            completeOrder={completeOrder}
            orderState={route.params.finalOrder.orderState}
            actionCarried={route.params.orderState}
            orderReadyOrder={route.params.finalOrder}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SelectDish: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: 0,
    width: width,
    height: width / 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    flexDirection: "row",
  },
  pageBack: {
    alignItems: "center",
    flex: 0,
  },
  pageTit: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
  mainOrderPage: {
    marginTop: width / 5,
    alignItems: "center",
  },
  topTit: {
    alignItems: "flex-start",
    width: width,
    paddingLeft: 20,
  },
  tit: {
    fontSize: 20,
    fontWeight: "700",
  },
  tit1: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  BottomActions: {
    width: width,
    position: "absolute",
    bottom: 0,
    height: width / 1.5,
    backgroundColor: "#FFE4E9",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  extendTit: {
    margin: 20,
    color: "#FF264D",
    fontWeight: "700",
    textDecorationLine: "underline",
    textDecorationColor: "#FF264D",
    fontSize: 16,
  },
});
