import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionList, TransactionDetail} from '../screens';

const Router = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Transaction List" component={TransactionList} />
      <AppStack.Screen name="Transaction Detail" component={TransactionDetail} />
    </AppStack.Navigator>
  );
};

export default Router;
