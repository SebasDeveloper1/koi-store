import React from 'react';
import './GenericList.scss';

export function GenericList({ children }) {
  return <ul className="generic-list-container">{children}</ul>;
}
