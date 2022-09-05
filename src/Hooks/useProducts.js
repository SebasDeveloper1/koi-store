import React from 'react';

export function useProducts() {
  const [stateProducts, setStateProducts] = React.useState({
    openModal: false,
    openShoppingCart: false,
  });

  const onClickOpenModal = () => {
    setStateProducts({ ...stateProducts, openModal: true });
  };

  const handleKeyDownOpenModal = (event) => {
    if (event.key === 'Enter') {
      setStateProducts({ ...stateProducts, openModal: true });
    }
  };

  const onClickCloseModal = () => {
    setStateProducts({ ...stateProducts, openModal: false });
  };

  const handleKeyDownCloseModal = (event) => {
    if (event.keyCode === 27) {
      setStateProducts({ ...stateProducts, openModal: false });
    }
  };

  const onClickOpenShoppingCart = () => {
    setStateProducts({ ...stateProducts, openShoppingCart: true });
  };

  const handleKeyDownOpenShoppingCart = (event) => {
    if (event.key === 'Enter') {
      setStateProducts({ ...stateProducts, openShoppingCart: true });
    }
  };

  const onClickCloseShoppingCart = () => {
    setStateProducts({ ...stateProducts, openShoppingCart: false });
  };

  const handleKeyDownCloseShoppingCart = (event) => {
    if (event.keyCode === 27) {
      setStateProducts({ ...stateProducts, openShoppingCart: false });
    }
  };

  return {
    stateProducts,
    onClickOpenModal,
    handleKeyDownOpenModal,
    onClickCloseModal,
    handleKeyDownCloseModal,
    onClickOpenShoppingCart,
    handleKeyDownOpenShoppingCart,
    onClickCloseShoppingCart,
    handleKeyDownCloseShoppingCart,
  };
}
