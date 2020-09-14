import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Dishes from "./Dishes";
const { width, height } = Dimensions.get("window");

// this is the menu page individual options (eg starters, biryani) where you see all the dishes
export default function IndividualMenu({
  item,
  handleTotal,
  dishHandler,
  callCustomize,
  getCustomDishInfo,
  searchDone,
}) {
  const [valofEach, setValOfEach] = useState([]);
  const [finalOfEach, setFinalOfEach] = useState(0);

  const updateVal = (val, id, name, c, customSelected, rating, cost) => {
    const tempArr = valofEach;
    tempArr[id] = val;
    setValOfEach(tempArr);
    let f = 0;
    const ar = valofEach;
    for (var i in ar) {
      f += ar[i];
    }
    setFinalOfEach(f);

    handleTotal(f, item.id, id, name, val, c, customSelected, rating, cost);
    // const a = {id, dish, val,}
    // item.filter((i) =>
    //     i.name.toLowerCase().includes(searchDone.toLowerCase())
    //     ).length !== 0
    // dishHandler(item.id, item.name, id, dish, val, c );
  };
  const OrderDishUpdate = (
    val,
    dishId,
    dishName,
    c,
    dishCustomizable,
    dishRating,
    dishPrice
  ) => {
    const tempVal = 0;
  };
  return (
    <View style={styles.IndividualMenu} key={item.id}>
      <Text style={styles.itmName}>{item.name}</Text>
      {searchDone === "" ? (
        <FlatList
          data={item.sub}
          renderItem={({ item }) => {
            return (
              <Dishes
                key={item.id * ((item.index * 7 + 1) * item.index)}
                dish={item}
                updateVal={updateVal}
                callCustomize={callCustomize}
                getCustomDishInfo={getCustomDishInfo}
              />
            );
          }}
          numColumns={1}
        />
      ) : (
        <FlatList
          data={item.sub}
          renderItem={({ item }) => {
            if (item.name.toLowerCase().includes(searchDone.toLowerCase())) {
              return (
                <Dishes
                  key={item.id * ((item.index * 7 + 1) * item.index)}
                  dish={item}
                  updateVal={updateVal}
                  callCustomize={callCustomize}
                  getCustomDishInfo={getCustomDishInfo}
                  OrderDishUpdate={OrderDishUpdate} //dummie function
                />
              );
            }
            // return <Text>{item.name}</Text>;
          }}
          numColumns={1}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  IndividualMenu: {
    width: width - 20,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "flex-start",
  },
  itmName: {
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 20,
    paddingBottom: 20,
  },
});
