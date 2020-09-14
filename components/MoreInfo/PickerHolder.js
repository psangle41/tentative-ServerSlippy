import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
const { width, height } = Dimensions.get("window");
import CustomPicker from "./CustomPicker";

export default function PickerHolder({ data, getPickerData, SetAMPM, type }) {
  const [selectType, setSelectType] = useState(false);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <CustomPicker data={data} getPickerData={getPickerData} />
      {type == "time" ? (
        <TouchableOpacity
          style={{
            height: 45,
            width: width / 7,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "grey",
            elevation: 5,
            backgroundColor: "#fff",
            marginLeft: 20,
          }}
          onPress={() => {
            setSelectType(!selectType);
            SetAMPM(!selectType);
          }}
        >
          {selectType == false ? <Text>AM</Text> : <Text>PM</Text>}
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}
