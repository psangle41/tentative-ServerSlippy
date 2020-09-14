import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import MainTopNav from "../TopNav/MainTopNav";
import SingleOrderExample from "../SingleOrderList/SingleOrderExample";
const { width, height } = Dimensions.get("window");

export default function Server({ navigation, route }) {
  const [newOrder, setNewOrder] = useState({});
  const [readyOrder, setReadyOrder] = useState({});
  async function getNew() {
    let orderObj = {
      tableNo: 25,
      customer: "Dhiraj Temkar",
      dishSelected: [
        {
          id: 2,
          name: "Mutton Biryani",
          count: 2,
          total: 80,
          isCustomized: true,
          customOptions: {
            size: "ExtraLarge",
            select: ["cheeseBurst", "Spicy", "Jyada Lao"],
          },
          rating: 4,
          price: 40,
          checkHai: true,
        },
        {
          id: 1,
          name: "McAloBurger",
          count: 3,
          total: 60,
          isCustomized: false,
          customOptions: {},
          rating: 3,
          price: 20,
          checkHai: true,
        },
        {
          id: 4,
          name: "Chicken Fry",
          count: 1,
          total: 50,
          isCustomized: false,
          customOptions: {},
          rating: 4,
          price: 50,
          checkHai: true,
        },
        {
          id: 3,
          name: "Limbu Sharbat",
          count: 2,
          total: 20,
          isCustomized: true,
          customOptions: {
            size: "Medium",
            select: ["ExtraCold", "straw dena"],
          },
          rating: 5,
          price: 10,
          checkHai: true,
        },
      ],
      total: 210,
      date: "09-08-2020",
      hotelName: "Brinda's Cafe",
      // time: comp.time,
      // image: comp.hotelImage,
      locality: "Santacruz East, Mumbai",
      Status: "New",
      orderBuild: true, // update if order cancle
      orderState: "prep",
    };
    // let response = await orderObj;
    setNewOrder(orderObj);

    let readyOrderObj = {
      tableNo: 7,
      customer: "Dhiraj Temkar",
      dishSelected: [
        {
          id: 2,
          name: "Mutton Biryani",
          count: 2,
          total: 80,
          isCustomized: true,
          customOptions: {
            size: "ExtraLarge",
            select: ["cheeseBurst", "Spicy", "Jyada Lao"],
          },
          rating: 4,
          price: 40,
          checkHai: true,
        },
        {
          id: 1,
          name: "McAloBurger",
          count: 3,
          total: 60,
          isCustomized: false,
          customOptions: {},
          rating: 3,
          price: 20,
          checkHai: true,
        },
        {
          id: 4,
          name: "Chicken Fry",
          count: 1,
          total: 50,
          isCustomized: false,
          customOptions: {},
          rating: 4,
          price: 50,
          checkHai: true,
        },
        {
          id: 3,
          name: "Limbu Sharbat",
          count: 2,
          total: 20,
          isCustomized: true,
          customOptions: {
            size: "Medium",
            select: ["ExtraCold", "straw dena"],
          },
          rating: 5,
          price: 10,
          checkHai: true,
        },
      ],
      total: 210,
      date: "09-08-2020",
      hotelName: "Brinda's Cafe",
      // time: comp.time,
      // image: comp.hotelImage,
      locality: "Santacruz East, Mumbai",
      Status: "New",
      orderBuild: true, // update if order cancle
      orderState: "ready",
    };
    setReadyOrder(readyOrderObj);
    // return orderObj;
  }
  getNew();

  return (
    <View style={styles.main}>
      <View style={styles.TopDesign}>
        <MainTopNav navigation={navigation} />
      </View>
      <View style={styles.MainBody}>
        <View style={styles.midNav}>
          <View style={styles.indiMidNav}>
            <Text style={{ color: "#fff" }}>All</Text>
          </View>
        </View>
        <ScrollView>
          {/*Put your lists here */}
          <SingleOrderExample
            orderDetail={newOrder}
            navigation={navigation}
            pageRoutedFrom={"ServerPrep"}
          />
          <SingleOrderExample
            orderDetail={readyOrder}
            navigation={navigation}
            pageRoutedFrom={"ServerReady"}
          />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  TopDesign: {
    width: width,
    height: width / 2,
    borderBottomLeftRadius: width / 9,
    borderBottomRightRadius: width / 9,
    position: "absolute",
    top: 0,
    backgroundColor: "#FF264D",
    elevation: 5,
    alignItems: "center",
  },
  MainBody: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    // borderWidth: 2,
    // position: "relative",
    marginTop: width / 2.5,
    width: width,
    height: height,
  },
  midNav: {
    width: width,
    height: width / 4.5,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
  },
  indiMidNav: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF264D",
    borderRadius: 20,
  },
});
