import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CheckedSVG from "../../../assets/Svgs/CheckedSVG";
import UncheckedSVG from "../../../assets/Svgs/UncheckedSVG";

export default function OptionsRadio({ option, handleSelectedEvent }) {
  const [checkVal, setCheckVal] = useState([]);
  const addValChecked = (val) => {
    let curVal;
    curVal = checkVal;
    curVal.push(val);
    setCheckVal(curVal);
    handleSelectedEvent(option.name, curVal);
  };
  const removeValChecked = (val) => {
    let curVal;
    curVal = checkVal;
    let finalCheck = [];
    curVal.map((e) => {
      if (val.value != e.value) {
        finalCheck.push(e);
      }
    });
    setCheckVal(finalCheck);
    handleSelectedEvent(option.name, finalCheck);
  };

  return (
    <View style={{ width: "90%" }}>
      {option.options.map((each) => {
        // const handleAll = (val) => {
        //   option.options.map((e) => {
        //     if (val.value === e.value) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   });
        // };
        const [check, setCheck] = useState(false);
        const getChecked = () => {
          const v = check;
          setCheck(!check);
          if (!v === true) {
            addValChecked(each);
          } else {
            removeValChecked(each);
          }
          //   let itBe = handleAll(each);
          //   setCheck(itBe);
        };
        return (
          <View style={styles.RadioCont} key={each.value}>
            <TouchableOpacity
              style={styles.opTouch}
              onPress={() => getChecked()}
            >
              <View
                style={
                  check === false
                    ? {
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {check === true ? <CheckedSVG /> : <UncheckedSVG />}
              </View>
            </TouchableOpacity>
            <View style={styles.opRow}>
              <Text style={styles.value}>{each.value}</Text>
              <Text style={styles.rate}>${each.rate}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  RadioCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  option: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
  },
  option1: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  },
  opRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "center",
  },
  opTouch: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
  value: {
    flex: 2,
    paddingLeft: 10,
    fontWeight: "700",
  },
  rate: {
    flex: 0,
    fontWeight: "700",
  },
});
