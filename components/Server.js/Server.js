import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import All from "../SingleOrderList/All";
import NewOrder from "../SingleOrderList/NewOrder";
import Ready from "../SingleOrderList/Ready";
import Preparingtab from "../SingleOrderList/Preparingtab";
import ServerImg from "../img/server";
import { CustomerOrder } from "../CustomerOrder/CustomerOrder";
import TopNav from "../TopNav/TopNav";
import HorizontalNav from "../horizontalNav/HorizontalNav";

const Server = ({ navigation }) => {
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
            <View style={{ flexDirection: "row", top:2}}>
            <View style={{ flexDirection: "column", top: windowHeight/120}}>
            <Text style={styles.name}>54th Ave, Marques St..</Text>
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
            </View>
            <ServerImg style={{ left: windowWidth * 0.3, top:15}} />
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
                pageRoutedFrom={"ServerPrep"}
              />
            ) : tab == 1 ? (
              <Preparingtab
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ServerPrep"}
              />
            ) : tab == 2 ? (
              <Ready
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ServerPrep"}
              />
            ) : (
              <All
                orderDetail={CustomerOrder}
                navigation={navigation}
                pageRoutedFrom={"ServerPrep"}
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
    height: windowWidth / 2.35,
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

  titleTag: {
    backgroundColor: "#ffffff",
    width: 0.32 * windowWidth,
    left: 0.12 * windowWidth,
    height: 0.05 * windowHeight,
    borderRadius: 20,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    top:5
  },
  serverImg: {
    height: 140,
    width: 70,
    left: 0.45 * windowWidth,
    resizeMode: "cover",
  },

  statusContainer: {
    height: windowHeight,
  },

  tabContainer: {
    flexDirection: "row",
    borderBottomColor: "#989494",
    borderBottomWidth: 2,
  },
  button: {
    flex: 1,
    height: 0.06 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  stateList: {
    height:windowHeight/1.74,
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
export default Server;
