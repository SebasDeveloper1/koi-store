import React from 'react';
import { getProductList } from '@services/products';
export const useProduts = () => {
  const [productList, setProdutList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const dataFetch = async () => {
      try {
        const valuePromise = await getProductList();
        setProdutList(valuePromise.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    dataFetch();
  }, []);
  return { productList, loading, error };
};
