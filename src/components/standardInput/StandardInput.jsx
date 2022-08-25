import React from 'react';
import './StandardInput.scss';

export function StandardInput(props) {
  const {
    forLabel,
    textLabel,
    typeInput,
    idInput,
    placeholderInput,
    modifierClassInput,
    style,
  } = props;
  return (
    <>
      <label htmlFor={forLabel} className="label-standard-input">
        {textLabel}
      </label>
      <input
        type={typeInput}
        id={idInput}
        placeholder={placeholderInput}
        className={
          modifierClassInput
            ? `standard-input ${modifierClassInput}`
            : `standard-input`
        }
        style={style}
      />
    </>
  );
}
