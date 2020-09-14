import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Server from "../components/Server.js/Server";
import Billing from "../components/Billing.js/Billing";
import SelectDish from "../components/MoreInfo/SelectDish";
import Chef from "../components/Chef.js/Chef";
import QrCodeScanner from "../components/QrCode/QrCodeScanner";
import OrderChefInfo from "../components/Chef.js/OrderChefInfo";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const ServerScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <SafeAreaView style={styles.mainCont}>
        <Server navigation={navigation} />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export const QrScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <SafeAreaView style={styles.mainCont}>
        <QrCodeScanner navigation={navigation} />
      </SafeAreaView>
    </ScreenContainer>
  );
};
export const ChefScreen = ({ navigation }) => (
  <ScreenContainer>
    <SafeAreaView style={styles.mainCont}>
      <Chef navigation={navigation} />
    </SafeAreaView>
  </ScreenContainer>
);
export const BillingScreen = ({ navigation }) => (
  <ScreenContainer>
    <SafeAreaView style={styles.mainCont}>
      <Billing navigation={navigation} />
    </SafeAreaView>
  </ScreenContainer>
);

// Chef ke screens
// export const OrderChefInfoScreen = ({ navigation, route }) => (
//   <ScreenContainer>
//     <OrderChefInfo route={route} />
//   </ScreenContainer>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCont: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
