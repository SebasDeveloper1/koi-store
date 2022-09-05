import React from 'react';
import './StandarSelectList.scss';

export function StandarSelectList(props) {
  const {
    id,
    textLabel,
    nameSelect,
    modifierClassContainer,
    modifierClassLabel,
    modifierClassSelect,
    dataListOpstions,
    style,
  } = props;

  return (
    <div
      className={
        modifierClassContainer
          ? `select-container ${modifierClassContainer}`
          : `select-container`
      }
    >
      <label
        htmlFor={id}
        className={
          modifierClassLabel
            ? `select__label ${modifierClassLabel}`
            : `select__label`
        }
      >
        {textLabel}
      </label>
      <select
        id={id}
        className={
          modifierClassSelect
            ? `select__list ${modifierClassSelect}`
            : `select__list`
        }
        name={nameSelect}
        style={style}
      >
        {dataListOpstions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
