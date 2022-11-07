// import axios from 'axios';
const { API_URL } = process.env;

export const getProductList = async () => {
  const response = await fetch(`${API_URL}products`);
  const data = await response.json();
  return { data };
  // const response = await axios.get(`${API_URL}products`);
  // const { data } = response;
  // return { data };
};
