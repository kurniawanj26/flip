import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RFPercentage} from 'react-native-responsive-fontsize';

const SearchBar = props => {
  const searchData = text => {
    const newData = props.arrayHolder.filter(item => {
      const itemData =
        item.beneficiary_name.toUpperCase() +
        item.sender_bank.toUpperCase() +
        item.beneficiary_bank.toUpperCase() +
        item.amount;

      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    props.setData(newData);
    props.setText(text);
  };

  return (
    <View style={styles.container}>
      <Icon size={25} color="#e0e0e0" name="search" />
      <TextInput
        style={styles.searchbar}
        placeholder="Cari nama, bank, atau nominal"
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={text => searchData(text)}
        value={props.text}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.showModal}>
        <Text style={styles.buttonText}>{props.filter}</Text>
        <Icon size={25} color="#f58442" name="expand-more" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchbar: {
    width: '80%',
    height: 30,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    fontSize: RFPercentage(2),
    padding: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    color: '#f58442',
    fontSize: RFPercentage(2),
  },
});

export default SearchBar;
