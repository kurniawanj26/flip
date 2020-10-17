import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextBold = props => {
  return <Text style={[styles.default, props.style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default TextBold;
