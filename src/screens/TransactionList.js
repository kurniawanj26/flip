import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, List, LoadingOverlay} from '../components';
import {TransactionListAPI} from '../api';

const TransactionList = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // setRefreshing(true);
      const result = await TransactionListAPI();
      setTransactions(result);
      setLoading(false);
      // alert(JSON.stringify(result));
      // setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Header title="Transaction List" />
      {transactions.length === 0 ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <List data={Object.values(transactions)} navigation={navigation} />
      )}
    </View>
  );
};

export default TransactionList;
