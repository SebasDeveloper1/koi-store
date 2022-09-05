import React from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TertiaryTitle } from '../TertiaryTitle/TertiaryTitle';
import { PrimaryParagraph } from '../PrimaryParagraph/PrimaryParagraph';
import { ImageButton } from '../ImageButton/ImageButton';
import './ProducCard.scss';

export function ProducCard(props) {
  const {
    idProduct,
    productPrice,
    productTitle,
    srcProductImage,
    style,
    onClick,
    onKeyDown,
  } = props;
  return (
    <li className="product-card-container">
      <button
        type="button"
        className="product-card"
        id={idProduct}
        style={style}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <img className="card__img" src={srcProductImage} alt={productTitle} />
        <section className="card__info-container">
          <TertiaryTitle
            textContent={`$ ${productPrice}`}
            modifierClass="card-info__title"
            style={{}}
          />
          <PrimaryParagraph
            textContent={productTitle}
            modifierClass="card-info__subtitle"
            style={{}}
          />
        </section>
      </button>
      <ImageButton
        buttonType="button"
        modifierClass="card-info__shopping-btn"
        style={{}}
        srcIcon={faCartArrowDown}
        onClick={() => window.alert('hola')}
      />
    </li>
  );
}
