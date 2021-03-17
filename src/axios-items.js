import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-inventory-c7ed9-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;