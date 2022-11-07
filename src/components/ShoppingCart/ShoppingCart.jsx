import React, { useContext } from 'react';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { ProductCardShoppingCart } from '@components/ProductCardShoppingCart/ProductCardShoppingCart';
import { AppContext } from '@context/AppContext';
import './ShoppingCart.scss';

export function ShoppingCart(props) {
  const { modifierClass } = props;
  const { stateCart } = useContext(AppContext);

  return (
    <section className={`shopping-cart ${modifierClass}`}>
      <div className="shopping-cart__list-section">
        {stateCart.cart.length > 0
          ? stateCart.cart.map((product) => (
              <ProductCardShoppingCart key={product.id} productInfo={product} />
            ))
          : null}
      </div>
      <div className="shopping-cart__botton-section">
        <div className="shopping-cart__total-section">
          <PrimaryParagraph
            textContent="Total"
            modifierClass="cart-total__title"
          />
          <PrimaryParagraph
            textContent={`$ ${stateCart.totalPrice}`}
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
