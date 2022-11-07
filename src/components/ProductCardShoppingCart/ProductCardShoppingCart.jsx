import React, { useContext } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { TertiaryTitle } from '@components/TertiaryTitle/TertiaryTitle';
import { ImageButton } from '@components/ImageButton/ImageButton';
import { AppContext } from '@context/AppContext';
import './ProductCardShoppingCart.scss';

export function ProductCardShoppingCart(props) {
  const { productInfo } = props;

  const { removeProductToCart } = useContext(AppContext);

  return (
    <article className="product-card-shopping-cart">
      <div className="card-shopping-cart__left-section">
        <img
          src={productInfo.images[0]}
          alt={productInfo.title}
          className="card-shopping__img"
        />
        <PrimaryParagraph
          textContent={productInfo.title}
          modifierClass="card-shopping__title"
        />
      </div>
      <div className="card-shopping-cart__right-section">
        <TertiaryTitle
          textContent={`$ ${productInfo.price}`}
          modifierClass="card-shopping__subtitle"
        />
        <ImageButton
          id="deleteProductBtn"
          type="button"
          modifierClass="card-shopping__delete-product-btn"
          style={{}}
          typeIcon="FontAwesomeIcon"
          srcIcon={faTrash}
          onClick={() => removeProductToCart({ payload: productInfo })}
        />
      </div>
    </article>
  );
}
