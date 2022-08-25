import React from 'react';
import './PrimaryParagraph.scss';

export function PrimaryParagraph(props) {
  const { textContent, modifierClassParagraph, style } = props;
  return (
    <p
      className={
        modifierClassParagraph
          ? `primary-paragraph ${modifierClassParagraph}`
          : `primary-paragraph`
      }
      style={style}
    >
      {textContent}
    </p>
  );
}
