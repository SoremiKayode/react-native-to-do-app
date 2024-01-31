import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Alert } from "react-native";
import Header from "./Header";
// TodoInput component for adding new tasks
const TodoInput = props => {
  // State to manage the entered task text
  const [enteredTask, setEnteredTask] = useState("");

  // Handler to update the entered task text
  const TodoInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  // Handler to add a new task
  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  // Function to check input and display an alert if the input is empty
  const checkInput = enteredTask => {
    if (enteredTask.length > 0) {
      addTaskHandler();
    } else {
      // Display an alert for empty input
      Alert.alert("Error", "Please enter a Task", [{ text: "OK" }], {
        cancelable: false
      });
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      {/* Header component */}
      <Header title="To-Do App"></Header>

      <View style={styles.inputContainer}>
        {/* TextInput for entering the task */}
        <TextInput
          placeholder="Task"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
        />

        {/* Container for cancel and add buttons */}
        <View style={styles.buttonContainer}>
          {/* Cancel button */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel}></Button>
          </View>

          {/* Add button with input validation */}
          <View style={styles.button}>
            <Button title="ADD" color="green" onPress={() => checkInput(enteredTask)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// StyleSheet to define styles for the component
const styles = StyleSheet.create({
  // Style for the main input container
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  // Style for the TextInput for entering the task
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },

  // Style for the button container
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },

  // Style for individual buttons
  button: {
    width: "40%"
  }
});

// Export the TodoInput component
export default TodoInput;
