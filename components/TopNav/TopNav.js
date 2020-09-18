import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MenuToggle from "../TopNav/MenuToggle";
import DrawerSVG from "../../assets/Svgs/DrawerSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
import SingleMenuOption from "./SingleMenuOption";
import ProfileSVG from "../../assets/Svgs/ProfileSVG";
import HomeSVG from "../../assets/Svgs/HomeSVG";
import NewOrderSVG from "../../assets/Svgs/NewOrderSVG";
import BackHistroySVG from "../../assets/Svgs/BackHistroySVG";
const { width, height } = Dimensions.get("window");

export default function TopNav({ navigation }) {
  const [open, setOpen] = useState(false);
  // let [fontsLoaded] = useFonts({
  //   "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  // });

  return (
    <View style={styles.topNav}>
      <View
        style={{
          flex: 0.9,
          alignItems: "flex-start",
          paddingLeft: width / 12,
        }}
      >
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <DrawerSVG />
        </TouchableOpacity>
        {open ? (
          <View style={styles.extendMenu}>
            <TouchableOpacity>
              <SingleMenuOption key={1} tit="Home">
                <HomeSVG />
              </SingleMenuOption>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("ProfileScreen", {
              navigation: navigation,
            })}>
              <SingleMenuOption key={2} tit="Profile">
                <ProfileSVG />
              </SingleMenuOption>
            </TouchableOpacity>
            <TouchableOpacity>
              <SingleMenuOption key={3} tit="New Order">
                <NewOrderSVG />
              </SingleMenuOption>
            </TouchableOpacity>
            <TouchableOpacity>
              <SingleMenuOption key={4} tit="Past Order">
                <BackHistroySVG />
              </SingleMenuOption>
            </TouchableOpacity>
            <TouchableOpacity>
              <SingleMenuOption key={5} tit="Club Order" />
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View style={{ flex: 0, alignItems: "flex-start" }}>
        <MenuToggle navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    marginTop: width / 20,
    alignItems: "center",
    width: width,
  },
  extendMenu: {
    // width: width / 2.7,
    backgroundColor: "#fff",
    // height: width / 2.5,
    position: "absolute",
    elevation: 15,
    borderRadius: 15,
    top: 30,
    left: width / 8,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
