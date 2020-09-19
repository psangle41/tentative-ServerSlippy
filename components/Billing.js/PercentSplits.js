import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function PercentSplits(props) {
  const [nameInput, setNameInput] = useState("");
  const [percentInput, setPercentInput] = useState();
  const [names, setNames] = useState([]);
  const updateNamesArray = () => {
    let val = nameInput;
    let val1 = percentInput;
    let tObj = {
      personName: val,
      id: val,
      OrderDetails: [],
      percentSplit: val1,
    };
    let tempTotal = 0;
    names.map((each) => {
      tempTotal = tempTotal + each.percentSplit;
    });
    if (val === "" || val1 === 0) {
      alert("please enter both the values!");
    } //else if (tempTotal > 101) {
    // alert(`Already Reached ${tempTotal}%`);
    //}
    else {
      setNames([...names, tObj]);
      setNameInput("");
      setPercentInput(0);
    }
  };
  return (
    <View>
      {props.percentSplit ? (
        <View>
          <Text style={styles.topTit}>Percent Splits karne name space</Text>

          <View style={styles.mainCont}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.nameInputSt}
                onChangeText={(val) => setNameInput(val)}
                value={nameInput}
                placeholder="Enter names..."
              />
              <TextInput
                style={styles.percentInputSt}
                onChangeText={(val1) => setPercentInput(val1)}
                value={percentInput}
                placeholder="%..."
                numeric
                keyboardType={"numeric"}
              />
            </View>
            <TouchableOpacity
              style={styles.addNameBtn}
              onPress={() => updateNamesArray()}
            >
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <View>
              {names.length === 0 ? (
                <View></View>
              ) : (
                <View
                  style={{ flexDirection: "row", width: width, marginTop: 20 }}
                >
                  <Text
                    style={{ flex: 0.5, paddingLeft: 20, fontWeight: "700" }}
                  >
                    Sr. No.
                  </Text>
                  <Text style={{ flex: 1, paddingLeft: 10, fontWeight: "700" }}>
                    Names Inclued
                  </Text>
                  <Text
                    style={{ flex: 0.5, paddingLeft: 10, fontWeight: "700" }}
                  >
                    Percentage
                  </Text>
                </View>
              )}
            </View>
            {names.map((each, index) => {
              return (
                <View
                  style={{
                    width: width,
                    marginVertical: 7,
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ flex: 0.5, paddingLeft: 20 }}>
                    {index + 1}
                  </Text>
                  <Text style={{ flex: 1, paddingLeft: 10 }}>
                    {each.personName}
                  </Text>
                  <Text style={styles.percentPlace}>{each.percentSplit} %</Text>
                </View>
              );
            })}
            {names.length === 0 ? (
              <View></View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  width: width,
                  justifyContent: "center",
                }}
              >
                <View style={styles.bottomLine} />
                {/*<View style={styles.bottomIndi}>
                  <Text style={styles.bottomTotal}>Total</Text>
                  <Text style={{ flex: 2 }}>
                    {props.totalAmount} / {names.length} ={" "}
                    <Text style={styles.finalRateSt}>
                      $ {(props.totalAmount / names.length).toFixed(2)} each
                    </Text>
                  </Text>
                </View>*/}
                <View>
                  <TouchableOpacity
                    style={styles.billThisBtn}
                    onPress={() => props.handlePrecentSplitRoute(names)}
                  >
                    <Text style={styles.billBtnTit}>Bill This</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    alignItems: "center",
    flexDirection: "row",
    width: width,
    justifyContent: "center",
  },
  topTit: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
  },
  nameInputSt: {
    width: width - 200,
    borderBottomColor: "#282828",
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#FFE4E9",
    marginRight: 2,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  percentInputSt: {
    width: width - 300,
    borderBottomColor: "#282828",
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "#FFE4E9",
    marginRight: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  addNameBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: "#FAA4C9",
    elevation: 4,
  },
  addText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "700",
  },
  finalRateSt: {
    color: "#12BB90",
    fontWeight: "700",
    fontSize: 18,
  },
  bottomTotal: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#282828",
  },
  bottomIndi: {
    flexDirection: "row",
    width: width,
    alignItems: "center",
  },
  bottomLine: {
    borderBottomWidth: 2,
    width: width - 20,
    marginVertical: 20,
    borderBottomColor: "#C4C4C4",
  },
  billThisBtn: {
    width: width / 2,
    height: width / 8,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width / 6,
    marginVertical: width / 15,
    elevation: 8,
  },
  billBtnTit: {
    color: "#fff",
    fontSize: 17.5,
    fontWeight: "700",
  },
  percentPlace: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    marginRight: 20,
    width: 60,
    alignItems: "flex-start",
  },
});
