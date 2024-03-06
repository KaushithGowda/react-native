import { TextInput, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function GoalInput({ addGoal }) {
  const [text, setText] = useState('');

  function goalEnter(text) {
    setText(text);
  }

  function add() {
    addGoal(text);
    setText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type your goal"
        style={styles.input}
        onChangeText={goalEnter}
        value={text}
      />
      <Button title="Add" onPress={add} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // height: 50,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '85%',
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginRight: 5,
    borderRadius: 5,
  },
});

export default GoalInput;
