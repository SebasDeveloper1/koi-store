import React from 'react';
import './PrimaryLink.scss';

export function PrimaryLink(props) {
  const { hrefLink, textLink, modifierClassLink, style } = props;
  return (
    <a
      href={hrefLink}
      className={
        modifierClassLink ? `primary-link ${modifierClassLink}` : `primary-link`
      }
      style={style}
    >
      {textLink}
    </a>
  );
}
