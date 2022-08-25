import React from 'react';
import './StandardForm.scss';

export function StandardForm({ children, style }) {
  return (
    <form action="/" className="standard-form" style={style}>
      {children}
    </form>
  );
}
