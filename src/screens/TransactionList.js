import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, List, LoadingOverlay, SearchBar} from '../components';
import {TransactionListAPI} from '../api';

const TransactionList = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [text, setText] = useState('');

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

  return (
    <View style={styles.container}>
      <Header title="Transaction List" />
      <SearchBar
        setData={setTransactions}
        setText={setText}
        arrayHolder={Object.values(arrayHolder)}
        text={text}
      />
      {transactions.length === 0 ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <View style={styles.containerList}>
          <List data={Object.values(transactions)} navigation={navigation} />
        </View>
      )}
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
