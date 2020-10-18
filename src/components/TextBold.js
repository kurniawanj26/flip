import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const TextBold = props => {
  return <Text style={[styles.default, props.style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontWeight: '600',
    fontSize: RFPercentage(2),
  },
});

export default TextBold;
