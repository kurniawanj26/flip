import React from 'react';
import {Header, Left, Body, Right, Button, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = props => {
  return (
    <Header style={styles.header}>
      {props.leftIcon ? (
        <Left style={styles.titleCenter}>
          <Button transparent style={styles.button} onPress={props.leftButton}>
            <Icon size={30} color="white" name={props.leftIcon} />
          </Button>
        </Left>
      ) : (
        <Left style={styles.titleCenter} />
      )}
      <Body style={styles.body}>
        <Title style={styles.titleText}>{props.title}</Title>
      </Body>
      {props.rightIcon ? (
        <Right style={styles.titleCenter}>
          <Button onPress={props.rightButton}>
            {props.rightIcon && <Icon size={30} color="white" name="add" />}
          </Button>
        </Right>
      ) : (
        <Right style={styles.titleCenter} />
      )}
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f58442',
  },
  button: {
    backgroundColor: null,
  },
  titleText: {
    color: 'white',
  },
  titleCenter: {
    flex: 1,
  },
  body: {
    flex: 2,
    alignItems: 'center',
  },
});

export default CustomHeader;
