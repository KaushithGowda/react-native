import { Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ itemData, deleteGoal }) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => deleteGoal(itemData.item.id)}
        key={itemData}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.text}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e0acc',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingVertical: 15,
  },
  text: {
    color: '#fff',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default GoalItem;
