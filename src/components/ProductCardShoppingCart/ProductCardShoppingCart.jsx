import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PrimaryParagraph } from '../PrimaryParagraph/PrimaryParagraph';
import { TertiaryTitle } from '../TertiaryTitle/TertiaryTitle';
import { ImageButton } from '../ImageButton/ImageButton';
import './ProductCardShoppingCart.scss';

export function ProductCardShoppingCart() {
  return (
    <article className="product-card-shopping-cart">
      <div className="card-shopping-cart__left-section">
        <img
          src="https://api.lorem.space/image?w=640&h=480&r=2935"
          alt="Licensed Plastic Pizza"
          className="card-shopping__img"
        />
        <PrimaryParagraph
          textContent="• Licensed Plastic Pizza"
          modifierClass="card-shopping__title"
        />
      </div>
      <div className="card-shopping-cart__right-section">
        <TertiaryTitle
          textContent="$ 4'579.99"
          modifierClass="card-shopping__subtitle"
        />
        <ImageButton
          id="deleteProductBtn"
          type="button"
          modifierClass="card-shopping__delete-product-btn"
          style={{}}
          srcIcon={faTrash}
          // onClick={}
          // onKeyDown={handleKeyDownCloseModal}
        />
      </div>
    </article>
  );
}
