import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default BodyText;
