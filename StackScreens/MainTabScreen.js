import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ServerScreen,
  ChefScreen,
  BillingScreen,
  QrScreen,
} from "../screens/Screens";
import { TouchableOpacity } from "react-native-gesture-handler";
import SelectDish from "../components/MoreInfo/SelectDish";
import CustomizeScreen from "../components/MoreInfo/CustomizeScreen";
import OrderInfo from "../components/OrderInfo/OrderInfo";
import ModifyOrder from "../components/OrderInfo/ModifyOrder";
import OrderChefInfo from "../components/Chef.js/OrderChefInfo";
import TableCart from "../components/FinalOrderActions/TableCart";
import AddCustomer from "../components/Billing.js/AddCustomer";
import SplitAmountScreen from "../components/Billing.js/SplitAmountScreen";

import ServerIcon from "./Icons/ServerIcon";
import ChefIcon from "./Icons/ChefIcon";
import BillIcon from "./Icons/BillIcon";
import ProfileScreen from "../components/Profile/ProfileScreen";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Tabs = createBottomTabNavigator();
const ServerStack = createStackNavigator();
const ChefStack = createStackNavigator();
const HomeStack = createStackNavigator();
let props1;

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
      <ServerStack.Screen name="ProfileScreen" component={ProfileScreen} />
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
      <ChefStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ChefStack.Navigator>
  );
};

const MainTabScreen = ({ route }) => {
  const { isEnabled } = route.params;
  const { isEnabled1 } = route.params;
  const { isEnabled2 } = route.params;

  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name="home"
        component={HomeTabs}
        initialParams={{ isEnabled, isEnabled1, isEnabled2 }}
      />
      <ServerStack.Screen name="ServerScreen" component={ServerScreen} />
      <ChefStack.Screen name="ChefScreen" component={ChefScreen} />
    </HomeStack.Navigator>
  );
};

function HomeTabs({ route }) {
  props1 = route.params;

  return (
    <Tabs.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen name="Server" component={ServerStackScreen} />
      <Tabs.Screen name="Chef" component={ChefStackScreen} />
      <Tabs.Screen name="Bill" component={BillingScreen} />
    </Tabs.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const isEnabled = props1.isEnabled;
  const isEnabled1 = props1.isEnabled1;
  const isEnabled2 = props1.isEnabled2;

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        height: windowHeight * 0.085,
        backgroundColor: "#ffffff",
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const color = isFocused ? "#ff264d" : "#707070";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled &&
            isEnabled1 &&
            isEnabled2
          ) {
            navigation.navigate(route.name);
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled &&
            isEnabled1 &&
            (route.name == "Server" || route.name == "Chef")
          ) {
            navigation.navigate(route.name);
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled &&
            isEnabled2 &&
            (route.name == "Server" || route.name == "Bill")
          ) {
            navigation.navigate(route.name);
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled &&
            isEnabled2 &&
            (route.name == "Server" || route.name == "Bill")
          ) {
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled &&
            route.name == "Server"
          ) {
            navigation.navigate(route.name);
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled1 &&
            route.name == "Chef"
          ) {
            navigation.navigate(route.name);
          } else if (
            !isFocused &&
            !event.defaultPrevented &&
            isEnabled2 &&
            route.name == "Bill"
          ) {
            navigation.navigate(route.name);
          } else {
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              justifyContent: "center",
              width: windowWidth / 3,
              alignItems: "center",
            }}
          >
            <Text style={{ color: isFocused ? "#ff264d" : "#707070" }}>
              {label}
            </Text>
            {route.name == "Server" ? (
              <ServerIcon iconColor={color} />
            ) : route.name == "Chef" ? (
              <ChefIcon iconColor={color} />
            ) : (
              <BillIcon iconColor={color} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MainTabScreen;
