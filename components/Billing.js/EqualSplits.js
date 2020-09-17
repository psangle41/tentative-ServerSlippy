import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function EqualSplits(props) {
  const [nameInput, setNameInput] = useState("");
  const [names, setNames] = useState([]);
  const updateNamesArray = () => {
    let val = nameInput;
    if (val === "") {
    } else {
      setNames([...names, val]);
      setNameInput("");
    }
  };
  return (
    <View>
      {props.equalSplit ? (
        <View>
          <Text style={styles.topTit}>Equal Splits karne name space</Text>

          <View style={styles.mainCont}>
            <TextInput
              style={styles.nameInputSt}
              onChangeText={(val) => setNameInput(val)}
              value={nameInput}
              placeholder="Enter names..."
            />
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
                  style={{
                    flexDirection: "row",
                    width: width,
                    marginTop: 20,
                  }}
                >
                  <Text style={{ flex: 1, paddingLeft: 20, fontWeight: "700" }}>
                    Sr. No.
                  </Text>
                  <Text style={{ flex: 2, paddingLeft: 10, fontWeight: "700" }}>
                    Names Inclued
                  </Text>
                </View>
              )}
            </View>
            <View>
              {names.map((each, index) => {
                return (
                  <View style={styles.eachNameSpace} key={index}>
                    <Text style={{ flex: 1, paddingLeft: 20 }}>
                      {index + 1}
                    </Text>
                    <Text style={{ flex: 2, paddingLeft: 10 }}>{each}</Text>
                  </View>
                );
              })}
            </View>
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
                <View style={styles.bottomIndi}>
                  <Text style={styles.bottomTotal}>Total</Text>
                  <Text style={{ flex: 2 }}>
                    {props.totalAmount} / {names.length} ={" "}
                    <Text style={styles.finalRateSt}>
                      $ {(props.totalAmount / names.length).toFixed(2)} each
                    </Text>
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.billThisBtn}
                    onPress={() => props.handleEqualSplitRoute(names)}
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
    width: width - 100,
    borderBottomColor: "#282828",
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#deeeed",
    marginRight: 10,
    borderRadius: 40,
  },
  addNameBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: "#12BB90",
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
  eachNameSpace: {
    width: width,
    marginVertical: 7,
    flexDirection: "row",
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
});
