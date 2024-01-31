import React from 'react';
import { Image, StyleSheet } from 'react-native';

// DisplayImage component takes a prop `taskStatus` and displays an image based on its length.
const DisplayImage = props => {
  // Check if the taskStatus array is empty
  if (props.taskStatus.length < 1) {
    // If empty, display the tick image
    return (
      <Image style={styles.image} source={require("../assets/tick.png")} />
    );
  } else {
    // If not empty, return null (no image displayed)
    return null;
  }
};

// StyleSheet to define styles for the component
const styles = StyleSheet.create({
  // Style for the image
  image: {
    width: 250,
    height: 250,
    margin: 80,
    marginTop: 250,
  },
});

// Export the DisplayImage component
export default DisplayImage;
