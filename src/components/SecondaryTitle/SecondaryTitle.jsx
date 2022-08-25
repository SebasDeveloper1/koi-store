import React from 'react';
import './SecondaryTitle.scss';

export function SecondaryTitle(props) {
  const { textContent, modifierClassTitle, style } = props;
  return (
    <h2
      className={
        modifierClassTitle
          ? `secondary-title ${modifierClassTitle}`
          : `secondary-title`
      }
      style={style}
    >
      {textContent}
    </h2>
  );
}
