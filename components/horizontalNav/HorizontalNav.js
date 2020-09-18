import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function HorizontalNav(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  });

  fontColor1 = fontColor2 = fontColor3 = fontColor4 = "#9a9795";
  BgColor1 = BgColor2 = BgColor3 = BgColor4 = "#00000000";
  switch (props.tab) {
    case 0: {
      var fontColor1 = "#fff";
      var leftShift = 0;
      var BgColor1 = "#FF264D";
      break;
    }
    case 1: {
      var fontColor2 = "#fff";
      var leftShift = 0 + width / 4;
      var BgColor2 = "#FF264D";
      break;
    }
    case 2: {
      var fontColor3 = "#fff";
      var leftShift = 0 + width / 2;
      var BgColor3 = "#FF264D";
      break;
    }
    case 3: {
      var fontColor4 = "#fff";
      var leftShift = (3 * width) / 4;
      var BgColor4 = "#FF264D";
      break;
    }
  }

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.tabContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            backgroundColor: BgColor1,
            borderRadius: 20,
          }}
          onPress={() => props.ManageHotizontalTabs(0)}
        >
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 18,
              color: fontColor1,
              textAlign: "center",
            }}
          >
            New Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            backgroundColor: BgColor2,
            borderRadius: 20,
          }}
          onPress={() => props.ManageHotizontalTabs(1)}
        >
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 18,
              color: fontColor2,
              textAlign: "center",
            }}
          >
            Preparing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            backgroundColor: BgColor3,
            borderRadius: 20,
          }}
          onPress={() => props.ManageHotizontalTabs(2)}
        >
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 18,
              color: fontColor3,
              textAlign: "center",
            }}
          >
            Ready
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            backgroundColor: BgColor4,
            borderRadius: 20,
          }}
          onPress={() => props.ManageHotizontalTabs(3)}
        >
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 18,
              color: fontColor4,
              textAlign: "center",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    borderBottomColor: "#989494",
    borderBottomWidth: 2,
    width: width,
    paddingVertical: 3,
    // height: windowWidth / 9,
  },
  button: {
    // flex: 1,
    // height: 0.06 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
    // marginVertical: 15,
    // paddingVertical: 5,
  },
});
