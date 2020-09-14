import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import OptionsMain from "./OptionsMain";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
const { width, height } = Dimensions.get("window");

export default function CustomizeScreen({ route }) {
  const user = route.params.user;
  const [selectedVal, setSelectedVal] = useState([]);
  const handleSelectedEvent = (name, val) => {
    let temp = selectedVal;

    if (temp.filter((e) => e.name == name).length > 0) {
      temp.map((o) => {
        if (o.name === name) {
          o.options = val;
        }
      });
    } else {
      temp.push({ name: name, options: val });
    }
    setSelectedVal(temp);
    route.params.handleMainCustomization(temp);
  };

  return (
    <SafeAreaView style={styles.CustomizeScreen}>
      <View style={styles.TopDesign} />
      <View style={styles.mainContainer}>
        <View style={{ width: width, marginTop: 10 }}>
          <TouchableOpacity
            style={{ marginLeft: 20, marginVertical: 10 }}
            onPress={() => route.params.navigation.pop()}
          >
            <Image
            // source={require("../../assets/ArrowL.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: width - 40 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {route.params.dishInfo.name}
          </Text>
          <Text style={styles.dishDesc}>
            {route.params.dishInfo.description}
          </Text>
        </View>
        {selectedVal.map((e) => {
          return (
            <View>
              <Text>
                {e.name}
                {e.options.map((v) => (
                  <Text>{v.value}</Text>
                ))}
              </Text>
            </View>
          );
        })}
        <View>
          <ScrollView
            vertical={true}
            style={{ height: height, marginBottom: 100 }}
          >
            <View style={{ width: width - 40 }}>
              {route.params.dishInfo.options.map((option) => (
                <OptionsMain
                  option={option}
                  handleSelectedEvent={handleSelectedEvent}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.BottomPop}>
          <View style={styles.UserPart}>
            <Text style={{ fontSize: 12, color: "#FF264D", fontWeight: "700" }}>
              ORDERING FOR
            </Text>
            <Text style={{ fontSize: 15, color: "#4E4A4A", fontWeight: "700" }}>
              Dhiraj Temkar
            </Text>
          </View>
          <View style={styles.AddBtn}>
            <TouchableOpacity
              style={{ flexDirection: "row", width: 150 }}
              onPress={() => route.params.navigation.pop()}
            >
              <Text style={styles.addCartText}>ADD TO CART</Text>
              <RightArrowSVG style={styles.arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CustomizeScreen: {
    flex: 1,
    width: "100%",
    height: "100%",
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
  mainContainer: {
    width: width,
    height: height,
    backgroundColor: "#fff",
    marginTop: 10,
    alignItems: "center",
  },
  dishDesc: {
    fontSize: 12,
    color: "#C4C4C4",
    fontWeight: "600",
  },
  BaseBtn: {
    width: width - 60,
    height: width / 6,
    backgroundColor: "#FF264D",
    marginLeft: "2%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "3%",
    position: "relative",
    bottom: 7,
    elevation: 5,
  },
  BottomPop: {
    width: width,
    backgroundColor: "#FFE4E9",
    position: "absolute",
    bottom: 0,
    height: width / 2.5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  UserPart: {
    flex: 0.5,
    alignItems: "center",
  },
  AddBtn: {
    flex: 0.5,
    width: 150,
    marginRight: 20,
    height: 45,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    elevation: 4,
  },
  arrow: {
    position: "absolute",
    right: 0,
  },
  addCartText: {
    color: "#fff",
    fontWeight: "700",
    lineHeight: 20,
  },
});
