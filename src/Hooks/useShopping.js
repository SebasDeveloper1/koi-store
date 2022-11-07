import { useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';

const initialState = {
  cart: [],
  totalPrice: 0,
};
export function useShopping() {
  const { parsedItem: shoppingCartList } = useLocalStorage({
    itemName: 'SHOPPING_CART',
    initialValue: initialState,
  });

  const [stateCart, setStateCart] = useState(shoppingCartList);

  const addProductToCart = ({ payload }) => {
    const ckeckProductExists = stateCart.cart.some(
      (item) => item.id === payload.id
    );
    if (!ckeckProductExists) {
      const addProduct = {
        ...stateCart,
        cart: [...stateCart.cart, payload],
        totalPrice: stateCart.totalPrice + payload.price,
      };

      setStateCart(addProduct);
      return localStorage.setItem('SHOPPING_CART', JSON.stringify(addProduct));
    } else {
      console.log(`This article already exists`);
    }
  };

  const removeProductToCart = ({ payload }) => {
    const newList = stateCart.cart.filter((item) => item !== payload);

    const removeProduct = {
      ...stateCart,
      cart: [...newList],
      totalPrice: stateCart.totalPrice - payload.price,
    };

    setStateCart(removeProduct);
    return localStorage.setItem('SHOPPING_CART', JSON.stringify(removeProduct));
  };

  return { stateCart, addProductToCart, removeProductToCart };
}
