import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ServerScreen,
  ChefScreen,
  BillingScreen,
  QrScreen,
} from "./screens/Screens";
import Server from "./assets/Svgs/Server";
import Chef from "./assets/Svgs/Chef";
import { TouchableOpacity } from "react-native-gesture-handler";
import BillingSVG from "./assets/Svgs/BillingSVG";
import SelectDish from "./components/MoreInfo/SelectDish";
import CustomizeScreen from "./components/MoreInfo/CustomizeScreen";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import ModifyOrder from "./components/OrderInfo/ModifyOrder";
import OrderChefInfo from "./components/Chef.js/OrderChefInfo";
import TableCart from "./components/FinalOrderActions/TableCart";
import AddCustomer from "./components/Billing.js/AddCustomer";
import SplitAmountScreen from "./components/Billing.js/SplitAmountScreen";

const Tabs = createBottomTabNavigator();
const ServerStack = createStackNavigator();
const ChefStack = createStackNavigator();

const ServerStackScreen = ({ route }) => {
  return (
    <ServerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ServerStack.Screen name="ServerScreen" component={ServerScreen} />
      <ServerStack.Screen name="QrScreen" component={QrScreen} />
      <ServerStack.Screen name="SelectDish" component={SelectDish} />
      <ServerStack.Screen name="CustomizeScreen" component={CustomizeScreen} />
      <ServerStack.Screen name="OrderInfo" component={OrderInfo} />
      <ServerStack.Screen name="ModifyOrder" component={ModifyOrder} />
      <ServerStack.Screen name="TableCart" component={TableCart} />
      <ServerStack.Screen name="AddCustomer" component={AddCustomer} />
      <ServerStack.Screen
        name="SplitAmountScreen"
        component={SplitAmountScreen}
      />
    </ServerStack.Navigator>
  );
};

const ChefStackScreen = ({ route }) => {
  return (
    <ChefStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ChefStack.Screen name="ChefScreen" component={ChefScreen} />
      <ChefStack.Screen name="OrderChefInfo" component={OrderChefInfo} />
    </ChefStack.Navigator>
  );
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let icon;
              if (route.name === "Server") {
                iconName = focused
                  ? (icon = <Server color="#FF264D" />)
                  : (icon = <Server color="#707070" />);
              } else if (route.name === "Chef") {
                iconName = focused
                  ? (icon = <Chef color="#FF264D" />)
                  : (icon = <Chef color="#707070" />);
              } else if (route.name === "Billing") {
                iconName = focused
                  ? (icon = <BillingSVG color="#FF264D" />)
                  : (icon = <BillingSVG color="#707070" />);
              }
              // You can return any component that you like here!
              return (
                <TouchableOpacity
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {icon}
                </TouchableOpacity>
              );
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: "#FF264D",
            style: {
              position: "absolute",
              alignItems: "center",
              bottom: 0,
              padding: 10,
              width: "100%",
              height: 64,
              zIndex: 10,
              elevation: 8,
            },
          }}
        >
          <Tabs.Screen name="Server" component={ServerStackScreen} />
          <Tabs.Screen name="Chef" component={ChefStackScreen} />
          <Tabs.Screen name="Billing" component={BillingScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activeIcon: {
    width: 20,
    height: 3,
    backgroundColor: "#FF264D",
    marginTop: 10,
  },
});
