import axios from './BaseURL';

const TransactionList = async () => {
  return axios
    .get('/frontend-test')
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.log('err', err);
      return err;
    });
};

export default TransactionList;
