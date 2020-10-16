import React from 'react';
import {StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingOverlay = props => {
  return (
    <Spinner
      visible={props.visible}
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
    />
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});

export default LoadingOverlay;
