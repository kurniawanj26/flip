import React from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  numberFormatter,
  uppercaseFirstLetter,
  dateFormatter,
} from '../helpers/utils';
import {TextBold} from '../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

const List = props => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.data}
      extraData={props.extraData}
      initialNumToRender={5}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() =>
            props.navigation.navigate('Transaction Detail', {data: item})
          }>
          <View style={styles.items}>
            {/* STATUS INDICATOR */}
            <View
              style={
                item.status === 'SUCCESS'
                  ? styles.cardSuccess
                  : styles.cardPending
              }
            />
            <View style={styles.detailContainer}>
              <View style={{flex: 1}}>
                <View style={styles.bankNames}>
                  <TextBold text={item.sender_bank.toUpperCase()} />
                  <Icon size={15} name="arrow-forward" />
                  <TextBold text={item.beneficiary_bank.toUpperCase()} />
                </View>
                <Text style={styles.text}>{item.beneficiary_name}</Text>
                <View style={styles.amountAndDate}>
                  <Text style={styles.text}>
                    {numberFormatter(item.amount)}{' '}
                  </Text>
                  <Icon size={8} name="circle" />
                  <Text style={styles.text}>
                    {' '}
                    {dateFormatter(item.created_at)}
                  </Text>
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
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardSuccess: {
    backgroundColor: '#66d490',
    width: 5,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  detailContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPending: {
    backgroundColor: '#f58442',
    width: 5,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  items: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankNames: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: RFPercentage(2),
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
    fontSize: RFPercentage(2),
  },
  pendingText: {
    fontWeight: '500',
    fontSize: RFPercentage(2),
  },
});

export default List;
