import React from 'react';

export function useEvents() {
  const initialState = {
    openMenuHeader: false,
    openUserMenu: false,
    openShoppingCart: false,
    openModal: { modalInfo: {}, modalState: false },
  };

  const actionTypes = {
    click_header_menu: 'CLICK_HEADER_MENU',
    click_user_menu: 'CLICK_USER_MENU',
    click_shopping_cart: 'CLICK_SHPPING_CART',
    click_modal: 'CLICK_MODAL',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.click_header_menu:
        return {
          ...state,
          openMenuHeader: action.payload,
        };
      case actionTypes.click_user_menu:
        return {
          ...state,
          openUserMenu: action.payload,
        };
      case actionTypes.click_shopping_cart:
        return {
          ...state,
          openShoppingCart: action.payload,
        };

      case actionTypes.click_modal:
        return {
          ...state,
          openModal: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleHeaderMenu = () => {
    dispatch({
      type: actionTypes.click_header_menu,
      payload: !state.openMenuHeader,
    });
  };

  const handleUserMenu = () => {
    dispatch({
      type: actionTypes.click_user_menu,
      payload: !state.openUserMenu,
    });
  };

  const handleShoppingCart = () => {
    dispatch({
      type: actionTypes.click_shopping_cart,
      payload: !state.openShoppingCart,
    });
  };

  const handleModal = ({ modalInfo }) => {
    dispatch({
      type: actionTypes.click_modal,
      payload: {
        modalInfo: modalInfo,
        modalState: !state.openModal.modalState,
      },
    });
  };

  const handleModalDown = (event, { modalInfo }) => {
    event.preventDefault();
    if (
      (!state.openModal && event.keyCode === 13) ||
      (state.openModal && event.keyCode === 27)
    ) {
      dispatch({
        type: actionTypes.click_modal,
        payload: {
          modalInfo: modalInfo,
          modalState: !state.openModal.modalState,
        },
      });
    }
  };

  return {
    state,
    handleHeaderMenu,
    handleUserMenu,
    handleShoppingCart,
    handleModal,
    handleModalDown,
  };
}
