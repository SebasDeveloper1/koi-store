import React from 'react';
import './Status404.scss';
import { PrimaryTitle } from '../../components/PrimaryTitle/PrimaryTitle';
import { SecondaryTitle } from '../../components/SecondaryTitle/SecondaryTitle';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';

const onClick = (e) => {
  window.history.back();
};

export function Status404() {
  return (
    <section className="status-404">
      <div className="container-404">
        <img
          src="https://i.postimg.cc/gjq7VV2Y/404-status.png"
          alt="Koi Store Logo"
          className="container-404__image"
        />
        <PrimaryTitle
          textContent="😥 Hmmm! 😥"
          modifierClassTitle="primary-title-light"
          style={{ marginBlockEnd: '8px' }}
        />

        <SecondaryTitle
          textContent="We did not find what you were looking for."
          modifierClassTitle="secondary-title-light"
        />

        <SecondaryButton
          buttonType="button"
          textButton="Go back"
          modifierClassButton=""
          onClick={onClick}
          style={{ marginBlockStart: '16px' }}
        />
      </div>
    </section>
  );
}
