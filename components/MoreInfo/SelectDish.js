import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import IndividualMenu from "./IndividualMenu";
import SearchBar from "./search/SearchBar";
import PageBackSVG from "../../assets/Svgs/PageBackSVG";

// main page where you can select multiple dishes from individual menu
export default function SelectDish({ route }) {
  // item param is single menu item/sub --> route.params.item.name
  // menu param contains all the items/sub
  // user data not getting passed
  let [searchDone, setSearchDone] = useState("");
  // let [filteredHotel, setFilteredHotel] = useState(hotels);

  const getSearchDone = (value) => {
    // Search Logic goes here
    setSearchDone(value);
  };

  let hotelGot = {
    id: 0,
    name: "Hellz Kitchen",
    locality: "Lower Parel",
    rating: 5,
    phoneNo: +919324678793,
    dineIn: false,
    call: true,
    scanQ: true,
    pickUp: true,
    menu: true,
    distance: 200,
    location: { lat: 19.1004292, lon: 72.8120342 },
    image: "",
    // require("../../assets/search/search1.png"),
    // images: [
    //   require("../../assets/search/punjabi0.png"),
    //   require("../../assets/search/punjabi2.png"),
    //   require("../../assets/search/punjabi3.png"),
    //   require("../../assets/search/search1.png"),
    //   require("../../assets/search/search2.png"),
    // ],
    menu: [
      {
        id: 0,
        name: "Starters",
        // image: require("../../assets/search/starter.png"),
        sub: [
          { id: 0, name: "Chicken Tikka", price: 39.99, rating: 4 },
          { id: 1, name: "Chicken Tandoori", price: 50.05, rating: 3 },
          { id: 2, name: "Chicken Malai", price: 45.6, rating: 3 },
        ],
      },
      {
        id: 1,
        name: "Biryani",
        // image: require("../../assets/search/punjabi3.png"),
        sub: [
          { id: 0, name: "Chicken Biryani", price: 50.99, rating: 3 },
          {
            id: 1,
            name: "Mutton Biryani",
            price: 60.05,
            rating: 5,
            customizable: true,
            description:
              "[97% Fat Free] This gourmet speciality is a flavorful blend of tender teriyaki glazed chicken strips served hot and toasted.",
            options: [
              {
                name: "Size",
                type: "radio",
                description: "please select one option",
                options: [
                  { value: "15cm", rate: 20 },
                  { value: "20cm", rate: 30 },
                  { value: "25cm", rate: 35.6 },
                ],
              },
              {
                name: "Choice of Vegetables",
                type: "check",
                description: "please select upto 5 options",
                options: [
                  { value: "Lettuce", rate: 20 },
                  { value: "Pickle", rate: 30 },
                  { value: "Paneer", rate: 35.6 },
                  { value: "Black Olives", rate: 25 },
                  { value: "Mashrooms", rate: 15.3 },
                  { value: "Three Cheese", rate: 55 },
                  { value: "Cheese Blast", rate: 45.4 },
                  { value: "Kuch Bhi Daalo", rate: 10.1 },
                ],
              },
            ],
          },
          { id: 2, name: "Prawns Biryani", price: 75.6, rating: 4 },
        ],
      },
      {
        id: 2,
        name: "Roti",
        // image: require("../../assets/search/roti.png"),
        sub: [
          { id: 0, name: "Naan", price: 7.99, rating: 4 },
          { id: 1, name: "Tandoori Roti", price: 10.05, rating: 3 },
          { id: 2, name: "Normal Roti", price: 5.6, rating: 3 },
        ],
      },
      {
        id: 3,
        name: "Main Course",
        // image: require("../../assets/search/punjabi2.png"),
        sub: [
          {
            id: 0,
            name: "Chicken Tikka",
            price: 39.99,
            rating: 4,
            customizable: true,
            description:
              "[97% Fat Free] This gourmet speciality is a flavorful blend of tender teriyaki glazed chicken strips served hot and toasted.",
            options: [
              {
                name: "Size",
                type: "radio",
                description: "please select one option",
                options: [
                  { value: "15cm", rate: 20 },
                  { value: "20cm", rate: 30 },
                  { value: "25cm", rate: 35.6 },
                ],
              },
              {
                name: "Choice of Vegetables",
                type: "check",
                description: "please select upto 5 options",
                options: [
                  { value: "Lettuce", rate: 20 },
                  { value: "Pickle", rate: 30 },
                  { value: "Paneer", rate: 35.6 },
                  { value: "Black Olives", rate: 25 },
                  { value: "Mashrooms", rate: 15.3 },
                  { value: "Three Cheese", rate: 55 },
                  { value: "Cheese Blast", rate: 45.4 },
                  { value: "Kuch Bhi Daalo", rate: 10.1 },
                ],
              },
            ],
          },
          { id: 0, name: "Chicken Tandoori", price: 50.05, rating: 3 },
          { id: 0, name: "Chicken Malai", price: 45.6, rating: 3 },
        ],
      },
      {
        id: 4,
        name: "Roti",
        // image: require("../../assets/search/roti.png"),
        sub: [
          { id: 0, name: "Naan", price: 7.99, rating: 4 },
          {
            id: 1,
            name: "Tandoori Roti",
            price: 10.05,
            rating: 3,
            customizable: true,
            description:
              "[97% Fat Free] This gourmet speciality is a flavorful blend of tender teriyaki glazed chicken strips served hot and toasted.",
            options: [
              {
                name: "Size",
                type: "radio",
                description: "please select one option",
                options: [
                  { value: "15cm", rate: 20 },
                  { value: "20cm", rate: 30 },
                  { value: "25cm", rate: 35.6 },
                ],
              },
              {
                name: "Choice of Vegetables",
                type: "check",
                description: "please select upto 5 options",
                options: [
                  { value: "Lettuce", rate: 20 },
                  { value: "Pickle", rate: 30 },
                  { value: "Paneer", rate: 35.6 },
                  { value: "Black Olives", rate: 25 },
                  { value: "Mashrooms", rate: 15.3 },
                  { value: "Three Cheese", rate: 55 },
                  { value: "Cheese Blast", rate: 45.4 },
                  { value: "Kuch Bhi Daalo", rate: 10.1 },
                ],
              },
            ],
          },
          { id: 2, name: "Normal Roti", price: 5.6, rating: 3 },
        ],
      },
    ],
  };

  let data = hotelGot.menu;
  // let user = route.params.user;
  // let navigation = route.params.navigation;

  const formatMenu = (data) => {
    const numberofFullRows = Math.floor(data.length / 2);
    let numofEleInLastRow = data.length - numberofFullRows * 2;
    while (numofEleInLastRow !== 2 && numofEleInLastRow !== 0) {
      data.push({ name: `blank-${numofEleInLastRow}`, empty: true });
      numofEleInLastRow = numofEleInLastRow + 1;
    }

    return data;
  };

  const [valTotals, setValTotals] = useState([]);
  const [total, setTotal] = useState(0);
  const [dishSelected, setDishSelected] = useState([]);
  const [finalOrder, setFinalOrder] = useState({});

  // {
  //   id: 0,
  //   dishSelected: [
  //     { batch: 0, id: 2, name: "Chicken Malai", count: 2, cost: 91.2 },
  //     { batch: 1, id: 1, name: "Mutton Biryani", count: 1, cost: 60.05 },
  //     { batch: 2, id: 0, name: "Naan", count: 1, cost: 7.99 },
  //     { batch: 2, id: 2, name: "Normal Roti", count: 2, cost: 11.2 },
  //   ],
  //   total: 170.44,
  //   date: "21 June 2020",
  //   time: "8.30 PM",
  //   hotelName: "Hellz Kitchen",
  //   image: require("../../assets/search/search1.png"),
  //   locality: "Lower Parel",
  //   Status: "IN PROGRESS",
  // },
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hotelName = hotelGot.name;
  var hotelImage = hotelGot.image;
  var hotelLocality = hotelGot.locality;

  const GetTime = () => {
    // Creating variables to hold time.
    var date, TimeType, hour, minutes, seconds, fullTime;

    // Creating Date() function object.
    date = new Date();

    // Getting current hour from Date object.
    hour = date.getHours();

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if (hour <= 11) {
      TimeType = "AM";
    } else {
      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = "PM";
    }

    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if (hour > 12) {
      hour = hour - 12;
    }

    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format.
    if (hour == 0) {
      hour = 12;
    }

    // Getting the current minutes from date object.
    minutes = date.getMinutes();

    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }

    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }

    // Adding all the variables in fullTime variable.
    fullTime =
      hour.toString() + ":" + minutes.toString() + " " + TimeType.toString();

    // Setting up fullTime variable in State.
    return fullTime;
  };

  const [customOp, setCustomOp] = useState([]);
  const handleMainCustomization = (val) => {
    let temp = val;
    setCustomOp(val);
  };
  const handleTotal = (
    val,
    id,
    dishId,
    name,
    cost,
    c,
    isCustomized,
    rating,
    actualCost
  ) => {
    const tempTit = valTotals;
    tempTit[id] = val;
    setValTotals(tempTit);
    let tit = 0;
    const art = valTotals;
    for (var i in art) {
      tit += art[i];
    }
    setTotal(tit);
    let tempFirst;
    tempFirst = dishSelected;
    let tempA = {};
    if (isCustomized === true) {
      if (customOp.filter((e) => e.name === name).length > 0) {
        customOp.map((each) => {
          if (each.name === name) {
            tempA = {
              batch: id,
              id: dishId,
              name: name,
              count: c,
              total: cost,
              isCustomized: true,
              customOptions: each.options,
              rating: rating,
              price: actualCost,
            };
          }
        });
      } else {
        tempA = {
          batch: id,
          id: dishId,
          name: name,
          count: c,
          total: cost,
          isCustomized: false,
          rating: rating,
          price: actualCost,
        };
      }
    } else {
      tempA = {
        batch: id,
        id: dishId,
        name: name,
        count: c,
        total: cost,
        rating: rating,
        price: actualCost,
      };
    }
    if (tempFirst.filter((e) => e.batch == id && e.id == dishId).length > 0) {
      tempFirst.map((each, index) => {
        if (each.id == dishId) {
          if (each.name == name) {
            tempFirst[index] = tempA;
          }
        }
      });
    } else {
      tempFirst.push(tempA);
    }
    setDishSelected(tempFirst);

    var dishArr = tempFirst;
    var time = GetTime();
    var upDate = {
      dishSelected: dishArr,
      total: tit.toFixed(2),
      date: `${date} ${month} ${year}`,
      hotelName: hotelName,
      time: time,
      image: hotelImage,
      locality: hotelLocality,
      Status: "IN PROGRESS",
      orderBuild: true,
      orderState: "new",
    };
    setFinalOrder(upDate);
  };

  let bs = React.createRef();
  let fall = new Animated.Value();
  // const [isCustom, setIsCustom] = useState(true);

  const gotoCustomize = () => {
    bs.current.snapTo(1);
    route.params.navigation.push("CustomizeScreen", {
      user: route.params.user,
    });
  };

  const [customDishInfo, setCustomDishInfo] = useState({});

  const getCustomDishInfo = (dish) => {
    setCustomDishInfo(dish);
  };

  const renderCustomizations = () => {
    return (
      <View style={styles.BottomAdd}>
        <Text style={{ fontSize: 16, fontWeight: "700", margin: 5 }}>
          Customizations are available for your Selection
        </Text>
        <TouchableOpacity
          onPress={() => {
            route.params.navigation.push("CustomizeScreen", {
              // user: route.params.user,
              hotel: hotelGot,
              dishInfo: customDishInfo,
              navigation: route.params.navigation,
              handleMainCustomization: handleMainCustomization,
            });
            bs.current.snapTo(1);
          }}
        >
          <View style={styles.BaseBtn}>
            <Text style={styles.CustBtn}>BUILD YOUR ORDER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
          <View style={styles.BaseBtn}>
            <Text style={styles.CustBtn}>ADD DEFAULT ITEM</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const [screenRoute, setScreenRoute] = useState(route.params.pageTitle);
  const ScreenWiseRoute = () => {
    if (screenRoute === "Menu Items") {
      route.params.navigation.push("OrderInfo", {
        navigation: route.params.navigation,
        hotel: hotelGot,
        total: total,
        finalOrder: finalOrder,
        tableNo: route.params.tableNo,
        pageTitle: "Order Details",
        orderState: "new",
      });
    } else if (screenRoute === "Extend Order") {
      route.params.navigation.push("OrderInfo", {
        navigation: route.params.navigation,
        hotel: hotelGot,
        total: total,
        finalOrder: finalOrder,
        tableNo: route.params.tableNo,
        pageTitle: "Order Details",
        prevTotal: route.params.totalUpdated,
        prevOrder: route.params.completeOrder,
        orderState: "extended",
      });
    }
  };

  const callCustomize = () => {
    bs.current.snapTo(0);
  };

  return (
    <SafeAreaView style={styles.SelectDish}>
      <BottomSheet
        ref={bs}
        snapPoints={[width / 1.4, 0]}
        renderContent={() => renderCustomizations()}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        // useAddress={isCustom}
      />
      <View style={styles.TopDesign} />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.pageHeader}>
          <PageBackSVG
            onPress={() => route.params.navigation.pop()}
            style={styles.pageBack}
          />
          <Text style={styles.pageTit}>{screenRoute}</Text>
        </View>
        <SearchBar
          placeHolder={"Search the menu..."}
          getSearchDone={getSearchDone}
        />
        <View
          style={styles.MainSelectDish}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={formatMenu(data)}
              renderItem={({ item }) => {
                if (item.empty === true) {
                  return <View style={styles.itemInvisibel} />;
                }
                return (
                  <IndividualMenu
                    item={item}
                    handleTotal={handleTotal}
                    callCustomize={callCustomize}
                    getCustomDishInfo={getCustomDishInfo}
                    searchDone={searchDone}
                  />
                );
              }}
              numColumns={1}
            />
          </ScrollView>
          <TouchableOpacity
            style={styles.ViewCartBtn}
            onPress={() => ScreenWiseRoute()}
          >
            <View style={styles.btnActBot}>
              <Text style={{ fontSize: 14, lineHeight: 18, color: "#fff" }}>
                ${total.toFixed(2)}
              </Text>
              <Text style={styles.plsTax}>PLUS TAXES</Text>
            </View>
            <View style={styles.baseMainBtn}>
              <Text style={styles.BtnText2}>ORDER DETAILS</Text>
              <Image source={require("../../assets/whiteArrow.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SelectDish: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: -233,
    left: -103,
    right: 0,
    width: 574,
    height: 574,
    borderRadius: 574 / 2,
    backgroundColor: "#FF264D",
  },
  MainSelectDish: {
    marginTop: -35,
    paddingTop: 35,
    width: width,
    height: width * 1.85,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  itemInvisibel: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  ViewCartBtn: {
    elevation: 4,
    width: width - 30,
    height: width / 6,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    backgroundColor: "#FF264D",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  BtnText2: {
    color: "#fff",
    fontSize: 18,
    paddingRight: 5,
  },
  BottomAdd: {
    backgroundColor: "#FFE4E9",
    width: "100%",
    height: "100%",
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  BaseBtn: {
    width: width - 60,
    height: width / 7,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  baseMainBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  plsTax: {
    fontSize: 10,
    lineHeight: 18,
    color: "#fff",
    marginLeft: 10,
  },
  btnActBot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 20,
  },
  CustBtn: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  pageHeader: {
    flexDirection: "row",
    width: width,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  pageBack: {
    position: "absolute",
    left: width / 15,
    // alignItems: "center",
    // marginTop: 20,
    // paddingLeft: width / 10,
  },
  pageTit: {
    // flex: 2,
    textAlign: "center",
    fontSize: 24,
    // lineHeight: 36,
    color: "#fff",
  },
});
