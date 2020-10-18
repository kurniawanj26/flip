import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RFPercentage} from 'react-native-responsive-fontsize';

const ModalOptions = props => {
  const [selectedOptions, setSelectedOptions] = useState('URUTKAN');

  const filterOptions = [
    'URUTKAN',
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ];

  const setSelected = item => {
    setSelectedOptions(item);
    if (item === 'Nama A-Z' || item === 'Nama Z-A') {
      props.sortByName(item);
    } else if (item === 'Tanggal Terbaru' || item === 'Tanggal Terlama') {
      props.sortByDate(item);
    }
  };

  return (
    <Modal
      isVisible={props.isVisible}
      animationOutTiming={1000}
      backdropOpacity={0.1}
      onBackdropPress={props.showModal}>
      <View style={styles.modal}>
        <FlatList
          data={filterOptions}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => setSelected(item)}>
              <Icon
                size={25}
                color="#f58442"
                name={
                  item === selectedOptions
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
              />
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginLeft: 15,
    fontSize: RFPercentage(2),
  },
});

export default ModalOptions;
