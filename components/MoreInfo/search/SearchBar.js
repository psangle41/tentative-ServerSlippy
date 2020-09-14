import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import SearchSVG from "../../../assets/Svgs/SearchSVG";
const { width, height } = Dimensions.get("window");

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.Search}>
      <TextInput
        placeholder={props.placeHolder}
        style={styles.Searchbar}
        onChangeText={(searchString) => {
          setSearch(searchString);
          props.getSearchDone(searchString);
        }}
        value={search}
      />
      <SearchSVG style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  Search: {
    width: width,
    height: width / 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    // flex: 1,
  },
  Searchbar: {
    width: width - 40,
    height: width / 8,
    backgroundColor: "#fff",
    paddingLeft: 7,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  searchIcon: {
    position: "absolute",
    right: width / 12,
    elevation: 5,
  },
});
