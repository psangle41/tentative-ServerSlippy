import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
// import { AuthContext } from "../Auth/Context";
// import AsyncStorage from "@react-native-community/async-storage";
// import TopLogo from "../LocalDine/TopLogo";
import InAppLink from "./InAppLink";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../StackScreens/context";
const { width, height } = Dimensions.get("window");

export default function ProfileScreen({ route }) {
  const { signOut } = React.useContext(AuthContext);
  let navigation = route.params.navigation;

  const [user, setUser] = useState({});
  const [profileImg, setProfileImg] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      // let userToken;
      let name = "T'Challa";
      let profileUrl = "https://api.adorable.io/avatars/150/" + name + ".png";
      try {
        // userToken = await AsyncStorage.getItem("userToken");
        // name = await AsyncStorage.getItem("name");
        // profileUrl = await fetch(
        //   `"https://api.adorable.io/avatars/150/" + ${name} + ".png"`
        // );
        setProfileImg(profileUrl);
      } catch (e) {
        console.log(e);
      }
      setUser({
        // token: userToken,
        name: name,
        profileUrl: profileUrl,
      });
      // console.log(profileUrl);
    });
  });
  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.TopDesign} />
      <ScrollView style={{ height: height, width: width }}>
        <View style={styles.main}>
          <View style={styles.profileContainer}>
            {profileImg == null ? (
              <Image
                style={styles.instead}
                source={require("../../assets/defaultUser.png")}
              />
            ) : (
              // <View style={styles.instead}></View>
              <Image
                style={styles.profileImg}
                // style={{ width: 400, height: 400 }}
                // source={{ uri: user.profileUrl }}
                source={{ uri: profileImg }}
              />
            )}
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userLoc}>Mumbai, Maharashtra</Text>

          <View style={styles.InApplinks}>
            <TouchableOpacity onPress={() => {}}>
              <InAppLink
                text="Your Orders"
                image={require("../../assets/yourOrder.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <InAppLink
                text="Payments"
                image={require("../../assets/payments.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <InAppLink
                text="Online Help or Support"
                image={require("../../assets/MaskBlack.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <InAppLink
                text="Your Reservations"
                image={require("../../assets/reserved.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomlinks}>
            <TouchableOpacity>
              <Text style={styles.bottomT}>Send Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bottomT}>Rate us on Play Store</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={styles.bottomT}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: width,
    // height: height,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: -333,
    left: -103,
    right: 0,
    width: 574,
    height: 574,
    borderRadius: 574 / 2,
    backgroundColor: "#FF264D",
  },
  main: {
    alignItems: "center",
    width: width,
    height: height,
  },
  profileContainer: {
    marginTop: 20,
    width: width / 2,
    height: width / 2,
    borderRadius: width,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  profileImg: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2,
  },
  instead: {
    width: width / 2,
    height: width / 2,
    borderRadius: width,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    backgroundColor: "#fff",
  },
  userName: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 10,
  },
  userLoc: {
    textAlign: "center",
    fontSize: 14,
    // fontWeight: "700",
    // marginVertical: 10,
  },
  InApplinks: {
    width: width - 60,
    borderBottomWidth: 1,
    marginVertical: width / 12,
  },
  bottomlinks: {
    width: width - 60,
    marginVertical: 20,
    alignItems: "flex-start",
    // borderWidth: 2,
    // borderColor: "#000",
  },
  bottomT: {
    fontSize: 14,
    marginVertical: 5,
    alignItems: "flex-start",
  },
});
