import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Animated } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import SearchBar from "../MoreInfo/search/SearchBar";
const { width, height } = Dimensions.get("window");

export default function QrCodeScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animationLineHeight, setAnimationLineHeight] = useState(0);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(1)
  );

  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 1000,
      }),
    ]).start(animateLine);
  };
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.push("SelectDish", {
      pageTitle: "Menu Items",
      navigation: navigation,
      tableNo: data,
    });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.TopDesign} />
      <SearchBar placeHolder="Enter Barcode / Table Number Manually ...." />
      <View style={{ marginTop: "-22%" }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: width, height: height }}
        >
          <View style={styles.layerTop} />
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View
              style={styles.focused}
              onLayout={(e) =>
                setAnimationLineHeight(e.nativeEvent.layout.height)
              }
            >
              {
                //   !scanned && (
                //   <Animated.View
                //     style={[
                //       styles.animationLineStyle,
                //       {
                //         transform: [
                //           {
                //             translateY: focusLineAnimation.interpolate({
                //               inputRange: [0, 1],
                //               outputRange: [0, animationLineHeight.height],
                //             }),
                //           },
                //         ],
                //       },
                //     ]}
                //   />
                // )
              }
            </View>
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom}>
            <TouchableNativeFeedback
              style={styles.scanAgain}
              // style={{ position: "absolute", top: 100, right: 20 }}
              onPress={() => setScanned(false)}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Scan Again</Text>
            </TouchableNativeFeedback>
          </View>
        </BarCodeScanner>
      </View>
    </View>
  );
}
const opacity = "rgba(0, 0, 0, .4)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: -483,
    left: -103,
    right: 0,
    width: 574,
    height: 574,
    // borderRadius: 574 / 2,
    backgroundColor: "#FF264D",
  },
  layerTop: {
    flex: 0.4,
    backgroundColor: opacity,
    marginTop: "14%",
    // position: "relative",
    // borderColor: "#FF264D",
    // borderBottomWidth: 3,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity,
    // borderColor: "#FF264D",
    // borderRightWidth: 3,
  },
  focused: {
    flex: 10,
    borderColor: "#FF264D",
    borderWidth: 2,
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity,
    // borderColor: "#FF264D",
    // borderLeftWidth: 3,
  },
  layerBottom: {
    flex: 0.8,
    backgroundColor: opacity,
    alignItems: "center",
    // borderColor: "#FF264D",
    // borderTopWidth: 3,
    // marginLeft: width / 3,
    // marginRight: width / 3,
  },
  scanAgain: {
    width: width - 60,
    height: width / 8,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  animationLineStyle: {
    height: 2,
    width: "100%",
    backgroundColor: "red",
  },
});
