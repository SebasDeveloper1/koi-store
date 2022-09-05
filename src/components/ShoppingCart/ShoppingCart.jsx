import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { PrimaryParagraph } from '../PrimaryParagraph/PrimaryParagraph';
import { ProductCardShoppingCart } from '../ProductCardShoppingCart/ProductCardShoppingCart';
import './ShoppingCart.scss';

export function ShoppingCart(props) {
  const { modifierClass } = props;
  return (
    // <section className="shopping-cart shopping-cart--open ">
    <section className={`shopping-cart ${modifierClass}`}>
      <div className="shopping-cart__list-section">
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
        <ProductCardShoppingCart />
      </div>
      <div className="shopping-cart__botton-section">
        <div className="shopping-cart__total-section">
          <PrimaryParagraph
            textContent="Total"
            modifierClass="cart-total__title"
          />
          <PrimaryParagraph
            textContent="$ 100.000"
            modifierClass="cart-total__subtitle"
          />
        </div>
        <PrimaryButton
          type="button"
          textButton="Checkout"
          modifierClass="shopping-cart__checkout-btn"
        />
      </div>
    </section>
  );
}
