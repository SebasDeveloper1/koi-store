import React from 'react';
import { faClose, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../../Hooks/useProducts';
import { ImageButton } from '../ImageButton/ImageButton';
import { ProductImage } from '../ProductImage/ProductImage';
import { SecondaryTitle } from '../SecondaryTitle/SecondaryTitle';
import { TertiaryTitle } from '../TertiaryTitle/TertiaryTitle';
import { PrimaryParagraph } from '../PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import './ProductDetail.scss';

export function ProductDetail(props) {
  const { onClickCloseModal, handleKeyDownCloseModal } = props;

  return (
    <section className="product-details-container">
      <ImageButton
        id="closeProductDetailsBtn"
        tabIndex="0"
        type="button"
        modifierClass="details__close-btn"
        style={{}}
        srcIcon={faClose}
        onClick={onClickCloseModal}
        onKeyDown={handleKeyDownCloseModal}
      />
      <figure className="details__section-img">
        <ProductImage
          src="https://api.lorem.space/image?w=640&h=480&r=2935"
          alt="Licensed Plastic Pizza"
          modifierClass=""
        />
      </figure>
      <SecondaryTitle
        textContent="$ 4'569.99"
        modifierClass="details-texts__price"
      />
      <section className="details__section-info">
        <div className="info-container">
          <div className="info__texts-container">
            <TertiaryTitle
              textContent="• Licensed Plastic Pizza"
              modifierClass="details-texts__title"
            />
            <PrimaryParagraph
              textContent="Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
              modifierClass="details-texts__descr"
            />
          </div>
        </div>
        <PrimaryButton
          type="button"
          textButton="Add to cart"
          modifierClass="info__buy-btn"
          srcIcon={faCartArrowDown}
        />
      </section>
    </section>
  );
}
