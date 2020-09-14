import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { AppLoading } from "expo";
import * as Font from "expo-font";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// const { width, height } = Dimensions.get("window");

import LeftArrow from "../img/leftArrow";
import PersonIcon from "../img/personIcon";
// import {CustomerOrder} from './Tabs/CustomerDatabase'

const SplitAmountScreen = ({ route, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  let i = 0;
  const { abc } = route.params;
  const { count1 } = route.params;
  const { totalAmount } = route.params;

  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderBottomWidth: 2,
          elevation: 2,
          borderBottomColor: "#a9a9a9",
          top: 0.03 * windowHeight,
        }}
      >
        <View
          style={{
            marginTop: windowHeight * 0.023,
            marginHorizontal: windowWidth * 0.05,
            marginBottom: windowHeight * 0.02,
            padding: 5,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
            <PersonIcon />
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: "Poppins-Light",
                fontSize: 20,
                lineHeight: 30,
              }}
            >
              {item.personName}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.titleTextContainer}>Qty</Text>
              {item.OrderDetails.map((v, i) => (
                <>
                  <Text style={styles.detailsTextContainer}>{v.count}</Text>
                </>
              ))}
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.titleTextContainer}>Item</Text>
              {item.OrderDetails.map((v, i) => (
                <>
                  <Text style={styles.detailsTextContainer}>{v.name}</Text>
                </>
              ))}
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.titleTextContainer}>Amount</Text>
              {item.OrderDetails.map((v, i) => (
                <>
                  <Text style={styles.detailsTextContainer2}>${v.total}</Text>
                </>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.TitleContainer}>
        <TouchableOpacity onPress={() => route.params.navigation.pop()}>
          <LeftArrow style={{ left: windowWidth * 0.01 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Split Amount</Text>
      </View>
      <Text
        style={{
          fontFamily: "Poppins-Light",
          color: "#000000",
          fontSize: 18,
          left: 20,
          marginTop: 10,
        }}
      >
        Order Details
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Light",
          color: "#ff264d",
          fontSize: 18,
          left: 20,
        }}
      >
        Table 7
      </Text>
      <FlatList
        data={abc}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <View
        style={{
          height: windowHeight * 0.16,
          bottom: 0,
          backgroundColor: "#f9eae4",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: windowHeight * 0.17,
            width: windowWidth * 0.4,
            marginLeft: windowWidth * 0.06,
            top: windowHeight * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.bottomText}>Order</Text>
            <Text style={styles.bottomText2}>86345</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.bottomText}>Amount</Text>
            <Text style={styles.bottomText2}>${totalAmount}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.bottomText}>Order By</Text>
            <Text style={styles.bottomText2}>{count1} People</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.billText}>
          <Text
            style={{
              fontFamily: "Poppins-Light",
              color: "#ffffff",
              fontSize: 22,
            }}
          >
            Bill This
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleContainer: {
    width: windowWidth,
    height: windowHeight * 0.1,
    paddingTop: windowHeight * 0.05,
    alignItems: "center",
    backgroundColor: "#ff264d",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Roboto",
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 28,
    left: windowWidth * 0.28,
  },
  titleTextContainer: {
    fontFamily: "Poppins-Light",
    color: "#ff264d",
    fontSize: 14,
    marginBottom: 5,
  },
  detailsTextContainer: {
    fontFamily: "Poppins-Light",
    color: "#666161",
    fontSize: 16,
    marginBottom: 5,
  },
  detailsTextContainer2: {
    fontFamily: "Poppins-Light",
    color: "#2699fb",
    fontSize: 16,
    marginBottom: 5,
  },
  bottomText: {
    fontFamily: "Poppins-Light",
    color: "#000000",
    fontSize: 14,
    marginBottom: 5,
  },
  bottomText2: {
    fontFamily: "Poppins-Light",
    color: "#ff264d",
    fontSize: 14,
    marginBottom: 5,
  },
  billText: {
    height: windowHeight * 0.07,
    width: windowWidth * 0.35,
    backgroundColor: "#ff264d",
    marginTop: windowHeight * 0.002,
    marginRight: windowWidth * 0.06,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplitAmountScreen;
function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}
