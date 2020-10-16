import axios from './baseURL';

const TransactionList = async () => {
  return axios
    .get('/frontend-test')
    .then(({data}) => {
      //   console.log('result all', data);
      // alert(JSON.stringify(data));
      return data;
    })
    .catch(err => {
      console.log('err', err);
      return err;
    });
};

export default TransactionList;
