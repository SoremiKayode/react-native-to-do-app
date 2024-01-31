import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import DisplayImage from "./components/DisplayImage";
import Header from "./components/Header";

// Main functional component representing the app
export default function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the visibility of the TodoInput component
  const [addTasks, setAddTasks] = useState(false);

  // Function to add a new task to the tasks list
  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle }
    ]);
    setAddTasks(false);
  };

  // Function to delete a task based on its id
  const deleteTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };

  // Function to handle the cancellation of task addition
  const cancelTaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View>
      {/* Header component */}
      <Header title="To-Do App"></Header>

      {/* Main content container */}
      <View style={styles.screen}>
        {/* Button to trigger task addition */}
        <Button title="Add New task" onPress={() => setAddTasks(true)}></Button>
        {/* TodoInput component for adding new tasks */}
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={cancelTaskAdditionHandler}
        />
      </View>

      {/* DisplayImage component to show an image when there are no tasks */}
      <DisplayImage taskStatus={tasks} />

      {/* FlatList to render the list of tasks using the TodoItem component */}
      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

// Stylesheet for the App component
const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70
  },
  screenlist: {
    marginLeft: 20,
    marginRight: 20
  }
});
