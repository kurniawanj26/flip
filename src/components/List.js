import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {numberFormatter, uppercaseFirstLetter} from '../helpers/utils';

const List = props => {
  return (
    <FlatList
      data={props.data}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() =>
            props.navigation.navigate('Transaction Detail', {data: item})
          }>
          <View style={styles.items}>
            <View>
              <View style={styles.bankNames}>
                <Text style={styles.textBold}>
                  {item.sender_bank.toUpperCase()}{' '}
                </Text>
                <Icon size={15} name="arrow-forward" />
                <Text style={styles.textBold}>
                  {' '}
                  {item.beneficiary_bank.toUpperCase()}
                </Text>
              </View>
              <Text>{item.beneficiary_name}</Text>
              <View style={styles.amountAndDate}>
                <Text>{numberFormatter(item.amount)} </Text>
                <Icon size={10} name="circle" />
                <Text> {item.completed_at} </Text>
              </View>
            </View>
            <View
              style={
                item.status === 'SUCCESS'
                  ? styles.successBadge
                  : styles.pendingBadge
              }>
              <Text
                style={
                  item.status === 'SUCCESS'
                    ? styles.successText
                    : styles.pendingText
                }>
                {uppercaseFirstLetter(item.status)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    borderBottomWidth: 0.5,
    backgroundColor: '#f7f7f7',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankNames: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: '700',
    fontSize: 16,
  },
  amountAndDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successBadge: {
    borderRadius: 5,
    padding: 4,
    backgroundColor: '#66d490',
  },
  pendingBadge: {
    borderRadius: 5,
    padding: 4,
    borderWidth: 1.5,
    borderColor: '#f58442',
  },
  successText: {
    color: 'white',
    fontWeight: '500',
  },
  pendingText: {
    fontWeight: '500',
  },
});

export default List;
