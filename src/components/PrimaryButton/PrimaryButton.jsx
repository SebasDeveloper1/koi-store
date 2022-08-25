import React from 'react';
import './PrimaryButton.scss';

export function PrimaryButton(props) {
  const { buttonType, textButton, modifierClassButton, style, onClick } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={
        modifierClassButton
          ? `primary-button ${modifierClassButton}`
          : `primary-button`
      }
      style={style}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
}
