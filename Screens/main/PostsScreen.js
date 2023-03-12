import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Posts</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 88,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
  },
});
