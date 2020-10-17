import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionDetail = ({route, navigation}) => {
  const [dataDetail, setDataDetail] = useState('');

  useEffect(() => {
    const {data} = route.params;
    setDataDetail(data);
  }, [navigation, route]);

  return (
    <View>
      <Header
        title="Transaction Detail"
        leftIcon="arrow-back"
        leftButton={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.divider}>
          <Text>ID TRANSAKSI: #{dataDetail.id}</Text>
        </View>
        <View style={styles.divider}>
          <Text>DETAIL TRANSAKSI</Text>
        </View>
        <View style={styles.bankNames}>
          <Text style={styles.textBold}>
            {dataDetail && dataDetail.sender_bank.toUpperCase()}{' '}
          </Text>
          <Icon size={15} name="arrow-forward" />
          <Text style={styles.textBold}>
            {' '}
            {dataDetail && dataDetail.beneficiary_bank.toUpperCase()}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={{backgroundColor:'red', flex:1}}>
            <Text>{dataDetail.beneficiary_name}</Text>
            <Text>{dataDetail.account_number}</Text>
          </View>
          <View style={{alignSelf:'flex-start',backgroundColor:'red', flex:1}}>
            <Text>NOMINAL</Text>
            <Text>{dataDetail.amount}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{backgroundColor:'red', flex:1}}>
            <Text>BERITA TRANSFER</Text>
            <Text>{dataDetail.remark}</Text>
          </View>
          <View style={{alignSelf:'flex-start',backgroundColor:'red', flex:1}}>
            <Text>KODE UNIK</Text>
            <Text>{dataDetail.unique_code}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{alignSelf:'flex-start',backgroundColor:'red', flex:1}}>
            <Text>WAKTU DIBUAT</Text>
            <Text>{dataDetail.created_at}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  rowContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divider: {
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#b0b0b0',
  },
  bankNames: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: '700',
    fontSize: 16,
  },
});
