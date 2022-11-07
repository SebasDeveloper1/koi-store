import React, { useContext, useEffect, useState } from 'react';
import {
  faCartArrowDown,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { TertiaryTitle } from '@components/TertiaryTitle/TertiaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { ImageButton } from '@components/ImageButton/ImageButton';
import { AppContext } from '@context/AppContext';
import './ProductCard.scss';

export function ProductCard(props) {
  const { addProductToCart } = useContext(AppContext);
  const { productInfo, style, onClick, onKeyDown } = props;
  const [toggleProduct, setToggleProduct] = useState(false);

  const handleClickShoppingBtn = (item) => {
    addProductToCart({ payload: item });
    setToggleProduct(!toggleProduct);
  };

  return (
    <li className="product-card-container">
      <button
        type="button"
        className="product-card"
        id={productInfo.id}
        style={style}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <img
          className="card__img"
          src={productInfo.images[0]}
          alt={productInfo.title}
        />
        <section className="card__info-container">
          <TertiaryTitle
            textContent={`$ ${productInfo.price}`}
            modifierClass="card-info__title"
            style={{}}
          />
          <PrimaryParagraph
            textContent={productInfo.title}
            modifierClass="card-info__subtitle"
            style={{}}
          />
        </section>
      </button>
      <ImageButton
        buttonType="button"
        modifierClass="card-info__shopping-btn"
        style={{}}
        typeIcon="FontAwesomeIcon"
        srcIcon={toggleProduct ? faCartShopping : faCartArrowDown}
        onClick={() => {
          handleClickShoppingBtn(productInfo);
        }}
      />
    </li>
  );
}
