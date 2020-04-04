import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/goalItem.component";
import GoalInput from "./components/goalInput.component";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleDeleteGoal = (id) =>
    setGoals((goalEntries) =>
      goalEntries.filter((goalEntry) => goalEntry.uid !== id)
    );

  const handleGoalAdd = (newGoal) => {
    if (newGoal) {
      setGoals((currentGoals) => [
        ...currentGoals,
        {
          uid: Math.random().toString(),
          value: newGoal,
        },
      ]);
    }
    setIsAddMode(false);
  };

  const handleGoalCancel = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="+ Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={handleGoalAdd}
        onCancelGoal={handleGoalCancel}
      />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.uid}
            title={itemData.item.value}
            onDeleteGoal={handleDeleteGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
