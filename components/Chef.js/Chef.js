import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import All from "../SingleOrderList/All";
import NewOrder from "../SingleOrderList/NewOrder";
import Ready from "../SingleOrderList/Ready";
import Preparingtab from "../SingleOrderList/Preparingtab";
import ServerImg from "../img/server";
import Menu from "../img/menu";
import { CustomerOrder } from "../CustomerOrder/CustomerOrder";
import TopNav from "../TopNav/TopNav";
import HorizontalNav from "../horizontalNav/HorizontalNav";

const Chef = ({ navigation }) => {
  const [tab, setTab] = React.useState(3);

  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  });

  const ManageHotizontalTabs = (val) => {
    setTab(val);
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.ContainerTwo}>
            <TopNav navigation={navigation} />
            <Text style={styles.name}>54th Ave, Marques St..</Text>
            <View style={{ flexDirection: "row", top: 20 }}>
              <View style={styles.titleTag}>
                <Text
                  style={{
                    fontFamily: "Poppins-Light",
                    color: "#ff264d",
                    fontSize: 19,
                    lineHeight: 29,
                  }}
                >
                  Mike's cafe
                </Text>
              </View>
              <ServerImg style={{ left: windowWidth * 0.45 }} />
            </View>
          </View>
        </View>

        <View style={styles.statusContainer}>
          <HorizontalNav
            ManageHotizontalTabs={ManageHotizontalTabs}
            tab={tab}
          />

          <View style={styles.stateList}>
            {tab == 0 ? (
              <NewOrder
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ChefNew"}
              />
            ) : tab == 1 ? (
              <Preparingtab
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ChefNew"}
              />
            ) : tab == 2 ? (
              <Ready
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ChefNew"}
              />
            ) : (
              <All
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ChefNew"}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  ContainerTwo: {
    flex: 1,
    backgroundColor: "#ff264d",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  titleContainer: {
    width: windowWidth,
    height: windowWidth / 2,
    borderBottomLeftRadius: windowWidth / 9,
    borderBottomRightRadius: windowWidth / 9,
    backgroundColor: "#FF264D",
    elevation: 5,
  },
  name: {
    color: "#ffffff",
    fontFamily: "Poppins-Light",
    fontSize: 19,
    lineHeight: 29,
    left: 0.12 * windowWidth,
    top: 2,
  },
  menuImg: {
    top: 0.015 * windowHeight,
    left: 0.85 * windowWidth,
  },
  titleTag: {
    backgroundColor: "#ffffff",
    width: 0.32 * windowWidth,
    left: 0.12 * windowWidth,
    height: 0.06 * windowHeight,
    borderRadius: 20,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  serverImg: {
    height: 140,
    width: 70,
    left: 0.45 * windowWidth,
    resizeMode: "cover",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  statusContainer: {
    height: windowHeight,
  },

  tabContainer: {
    flexDirection: "row",
    borderBottomColor: "#989494",
    borderBottomWidth: 2,
    width: windowWidth,
    paddingVertical: 3,
    // height: windowWidth / 9,
  },
  button: {
    flex: 1,
    // height: 0.06 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    // paddingVertical: 5,
  },
  stateList: {
    height:windowHeight/1.87,
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    borderBottomColor: 5,
    backgroundColor: "#fff",
  },
});

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}
export default Chef;
