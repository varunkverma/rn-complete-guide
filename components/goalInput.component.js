import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ visible, onAddGoal, onCancelGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleGoalInput = (enteredText) => setEnteredGoal(enteredText);

  const handleGoalAdd = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const handleGoalCancel = () => {
    setEnteredGoal("");
    onCancelGoal();
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title="ADD" onPress={handleGoalAdd} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={handleGoalCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    //height: "80%",
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  actions: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
