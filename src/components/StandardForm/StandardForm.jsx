import React from 'react';
import './StandardForm.scss';

export function StandardForm({ id, modifierClass, style, onSubmit, children }) {
  return (
    <form
      id={id}
      onSubmit={onSubmit}
      action="/"
      className={
        modifierClass ? `standard-form ${modifierClass}` : `standard-form`
      }
      style={style}
    >
      {children}
    </form>
  );
}
