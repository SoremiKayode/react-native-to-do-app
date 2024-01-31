import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

// TodoItem component to represent an individual to-do item
const TodoItem = props => {
  // State to manage the checked state of the CheckBox
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.screen}>
      {/* Container for the to-do item */}
      <View style={styles.listItem}>
        {/* Display the title of the to-do item */}
        <Text>{props.title}</Text>
      </View>

      {/* CheckBox to mark the completion of the to-do item */}
      <CheckBox value={check} onValueChange={() => setCheck(!check)} />

      {/* TouchableOpacity for the delete button */}
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} style={styles.button}>
        {/* Text for the delete button */}
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet to define styles for the component
const styles = StyleSheet.create({
  // Style for the container of the to-do item
  listItem: {
    padding: 10,
    backgroundColor: '#eee',
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
  },

  // Style for the main container of the component
  screen: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: '100%',
  },

  // Style for the delete button
  button: {
    display: 'flex',
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Style for the delete button (green variant, currently not used)
  buttonGreen: {
    display: 'flex',
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Style for the text inside the delete button
  text: {
    fontSize: 14,
    color: 'white',
  },
});

// Export the TodoItem component
export default TodoItem;
