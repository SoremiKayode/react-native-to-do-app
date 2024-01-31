import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Header component takes a prop `title` and renders a header with a centered text.
const Header = props => {
  // Return a View component containing the header with a centered text
  return (
    <View style={styles.header}>
      {/* Display the text received from the `title` prop */}
      <Text>{props.title}</Text>
    </View>
  );
};

// StyleSheet to define styles for the component
const styles = StyleSheet.create({
  // Style for the header container
  header: {
    width: '100%',
    height: 100,
    paddingTop: 40,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Style for the header text (not currently used in the component)
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});

// Export the Header component
export default Header;
