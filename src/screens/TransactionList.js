import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Header,
  List,
  LoadingOverlay,
  SearchBar,
  ModalOptions,
} from '../components';
import {TransactionListAPI} from '../api';

const TransactionList = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('URUTKAN');

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      let result = await TransactionListAPI();
      setTransactions(result);
      setArrayHolder(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const sortAscending = filterType => {
    const newData = Object.keys(transactions).map(i => transactions[i]);
    newData.sort(function(a, b) {
      var alc = a.beneficiary_name.toLowerCase();
      var blc = b.beneficiary_name.toLowerCase();
      return alc > blc ? 1 : alc < blc ? -1 : 0;
    });
    setTransactions(newData);
    setFilter(filterType);
    toggleModal();
  };

  const sortDescending = filterType => {
    const newData = Object.keys(transactions).map(i => transactions[i]);
    newData.sort(function(a, b) {
      var alc = a.beneficiary_name.toLowerCase();
      var blc = b.beneficiary_name.toLowerCase();
      return alc < blc ? 1 : alc > blc ? -1 : 0;
    });
    setTransactions(newData);
    setFilter(filterType);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Header title="Transaction List" />
      <SearchBar
        setData={setTransactions}
        setText={setText}
        arrayHolder={Object.values(arrayHolder)}
        text={text}
        showModal={toggleModal}
        filter={filter}
      />
      {transactions.length === 0 ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <View style={styles.containerList}>
          <List
            data={Object.values(transactions)}
            extraData={transactions}
            navigation={navigation}
          />
        </View>
      )}
      <ModalOptions
        isVisible={modalVisible}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
        showModal={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  containerList: {
    flex: 1,
    // padding: 10,
    marginTop: 10,
  },
});

export default TransactionList;
