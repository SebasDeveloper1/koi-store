import React from 'react';
import './ImageButton.scss';

export function ImageButton(props) {
  const { buttonType, modifierClassButton, style, srcIcon, altIcon, onClick } =
    props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={
        modifierClassButton
          ? `image-button ${modifierClassButton}`
          : `image-button`
      }
      style={style}
      onClick={onClick}
    >
      <img className="icon__image-button" src={srcIcon} alt={altIcon} />
    </button>
  );
}
