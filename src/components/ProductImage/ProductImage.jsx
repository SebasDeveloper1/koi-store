import React from 'react';
import './ProductImage.scss';

export function ProductImage(props) {
  const { src, alt, modifierClass, style } = props;

  return (
    <img
      className={modifierClass ? `product-img ${modifierClass}` : `product-img`}
      src={src}
      alt={alt}
      style={style}
    />
  );
}
