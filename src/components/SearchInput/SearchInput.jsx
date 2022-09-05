import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.scss';

export function SearchInput(props) {
  const { type, id, placeholder, modifierClass, style } = props;
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search__icon" />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={
          modifierClass ? `search__input ${modifierClass}` : `search__input`
        }
        style={style}
      />
    </div>
  );
}
