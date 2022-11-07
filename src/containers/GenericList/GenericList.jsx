import React from 'react';
import './GenericList.scss';

export function GenericList({ children }) {
  return (
    <div className="generic-list-container">
      <ul className="generic-list">{children}</ul>;
    </div>
  );
}
