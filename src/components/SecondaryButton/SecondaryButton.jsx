import React from 'react';
import './SecondaryButton.scss';

export function SecondaryButton(props) {
  const { buttonType, textButton, modifierClassButton, style, onClick } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={
        modifierClassButton
          ? `secondary-button ${modifierClassButton}`
          : `secondary-button`
      }
      style={style}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
}
