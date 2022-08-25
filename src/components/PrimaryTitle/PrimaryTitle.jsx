import React from 'react';
import './PrimaryTitle.scss';

export function PrimaryTitle(props) {
  const { textContent, modifierClassTitle, style } = props;
  return (
    <h1
      className={
        modifierClassTitle
          ? `primary-title ${modifierClassTitle}`
          : `primary-title`
      }
      style={style}
    >
      {textContent}
    </h1>
  );
}
