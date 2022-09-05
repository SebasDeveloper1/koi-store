import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageButton.scss';

export function ImageButton(props) {
  const {
    type,
    tabIndex,
    id,
    modifierClass,
    style,
    srcIcon,
    onClick,
    onKeyDown,
  } = props;
  return (
    <button
      id={id}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={
        modifierClass ? `image-button ${modifierClass}` : `image-button`
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <FontAwesomeIcon icon={srcIcon} className="icon__image-button" />
    </button>
  );
}
