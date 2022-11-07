import React, { useContext, useState } from 'react';
import {
  faClose,
  faCartArrowDown,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@context/AppContext';
import { ImageButton } from '@components/ImageButton/ImageButton';
import { ProductImage } from '@components/ProductImage/ProductImage';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { TertiaryTitle } from '@components/TertiaryTitle/TertiaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import './ProductDetail.scss';

export function ProductDetail(props) {
  const { productInfo, onClickCloseModal, handleKeyDownCloseModal } = props;
  const { addProductToCart } = useContext(AppContext);
  const [toggleProduct, setToggleProduct] = useState(false);

  const handleClickShoppingBtn = (item) => {
    addProductToCart({ payload: item });
    setToggleProduct(!toggleProduct);
    onClickCloseModal();
  };

  return (
    <section className="product-details-container">
      <ImageButton
        id="closeProductDetailsBtn"
        tabIndex="0"
        type="button"
        modifierClass="details__close-btn"
        style={{}}
        typeIcon="FontAwesomeIcon"
        srcIcon={faClose}
        onClick={onClickCloseModal}
        onKeyDown={handleKeyDownCloseModal}
      />
      <figure className="details__section-img">
        <ProductImage
          src={productInfo.images}
          alt={productInfo.title}
          modifierClass=""
        />
      </figure>
      <SecondaryTitle
        textContent={`$ ${productInfo.price}`}
        modifierClass="details-texts__price"
      />
      <section className="details__section-info">
        <div className="info-container">
          <div className="info__texts-container">
            <TertiaryTitle
              textContent={`• ${productInfo.title}`}
              modifierClass="details-texts__title"
            />
            <PrimaryParagraph
              textContent={productInfo.description}
              modifierClass="details-texts__descr"
            />
          </div>
        </div>
        <PrimaryButton
          type="button"
          textButton="Add to cart"
          modifierClass="info__buy-btn"
          srcIcon={toggleProduct ? faCartArrowDown : faCartShopping}
          onClick={() => {
            handleClickShoppingBtn(productInfo);
          }}
        />
      </section>
    </section>
  );
}
