import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(text) {
    setGoals((prev) => [...prev, { text, id: Math.random().toString() }]);
  }

  function deleteGoal(id) {
    setGoals((prev) => {
      return prev.filter((item) => id !== item.id);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem itemData={itemData} deleteGoal={deleteGoal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 10,
    paddingVertical: 10,
    borderColor: 'grey',
    borderTopWidth: 1,
  },
});
