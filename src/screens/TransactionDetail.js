import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header, TextBold} from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionDetail = ({route, navigation}) => {
  const [dataDetail, setDataDetail] = useState('');

  useEffect(() => {
    const {data} = route.params;
    setDataDetail(data);
  }, [route.params]);

  return (
    <View style={styles.mainContainer}>
      <Header
        title="Transaction Detail"
        leftIcon="arrow-back"
        leftButton={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.divider}>
          <View style={styles.idContainer}>
            <TextBold text={'ID TRANSAKSI: #' + dataDetail.id} />
            <TouchableOpacity onPress={() => console.warn('dummy button')}>
              <Icon
                size={20}
                style={styles.iconCopy}
                color={'#f58442'}
                name="content-copy"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}>
          <View style={styles.detailContainer}>
            <TextBold text="DETAIL TRANSAKSI" />
            <TouchableOpacity onPress={() => console.warn('dummy button')}>
              <TextBold text="Tutup" style={styles.buttonClose} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bankNames}>
          <TextBold text={dataDetail && dataDetail.sender_bank.toUpperCase()} />
          <Icon size={15} name="arrow-forward" />
          <TextBold
            text={dataDetail && dataDetail.beneficiary_bank.toUpperCase()}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftSection}>
            <TextBold text={dataDetail.beneficiary_name} />
            <Text>{dataDetail.account_number}</Text>
          </View>
          <View style={styles.rightSection}>
            <TextBold text="NOMINAL" />
            <Text>{dataDetail.amount}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftSection}>
            <TextBold text="BERITA TRANSFER" />
            <Text>{dataDetail.remark}</Text>
          </View>
          <View style={styles.rightSection}>
            <TextBold text="KODE UNIK" />
            <Text>{dataDetail.unique_code}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftSection}>
            <TextBold text="WAKTU DIBUAT" />
            <Text>{dataDetail.created_at}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 15,
  },
  rowContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    alignSelf: 'flex-start',
    flex: 1,
  },
  divider: {
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#b0b0b0',
  },
  bankNames: {
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: '700',
    fontSize: 16,
  },
  iconCopy: {
    marginLeft: 10,
  },
  buttonClose: {
    color: '#f58442',
  },
});
