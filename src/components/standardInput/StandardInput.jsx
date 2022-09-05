import React from 'react';
import './StandardInput.scss';

export function StandardInput(props) {
  const {
    htmlFor,
    textLabel,
    type,
    id,
    placeholder,
    modifierClassInput,
    modifierClassLabel,
    style,
  } = props;
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={
          modifierClassLabel
            ? `label-standard-input ${modifierClassLabel}`
            : `label-standard-input`
        }
      >
        {textLabel}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
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
