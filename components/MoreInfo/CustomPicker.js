import React, { useState } from "react";
import { View, Picker, Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

export default function CustomPicker({ data, getPickerData }) {
  const [selectVal, setSelectVal] = useState();
  return (
    <View
      style={{
        width: width / 3,
        height: 45,
        alignItems: "center",
        elevation: 5,
        backgroundColor: "#fff",
        flexDirection: "row",
      }}
    >
      <Picker
        selectedValue={selectVal}
        style={{
          width: width / 3,
          height: 45,
          alignItems: "center",
          borderColor: "#FF264D",
          borderWidth: 2,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectVal(itemValue);
          getPickerData(itemValue);
        }}
      >
        {data.map((val) => (
          <Picker.Item
            label={val}
            value={val}
            key={val}
            style={{
              alignItems: "center",
              fontSize: 18,
              borderWidth: 1,
            }}
          />
        ))}
      </Picker>
    </View>
  );
}
