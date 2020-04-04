import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = ({ id, title, onDeleteGoal }) => {
  return (
    <TouchableOpacity onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#eee",
    borderColor: "blue",
    borderWidth: 1,
    marginTop: 10,
  },
});

export default GoalItem;
