import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Header, List, LoadingOverlay} from '../components';
import {TransactionListAPI} from '../api';

const TransactionList = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // setRefreshing(true);
      const result = await TransactionListAPI();
      // setContacts(result.data);
      alert(JSON.stringify(result))
      setLoading(false);
      // setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Header title="Transaction List" />
      {transactions.length === 0 ? (
        <LoadingOverlay visible={loading}/>
      ) : <Text>Halo</Text>
      }
    </View>
  );
};

export default TransactionList;
