import React from 'react';
import status404 from '@images/404_status.svg';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { SecondaryButton } from '@components/SecondaryButton/SecondaryButton';
import './Status404.scss';

const onClick = (e) => {
  window.history.back();
};

export function Status404() {
  return (
    <section className="status-404">
      <div className="container-404">
        <img
          src={status404}
          alt="Status 404"
          className="container-404__image"
        />
        <PrimaryTitle
          textContent="😥 Hmmm! 😥"
          modifierClass="primary-title-light"
          style={{ marginBlockEnd: '8px' }}
        />

        <SecondaryTitle
          textContent="We did not find what you were looking for."
          modifierClass="secondary-title-light"
        />

        <SecondaryButton
          type="button"
          textButton="Go back"
          modifierClass=""
          onClick={onClick}
          style={{ marginBlockStart: '16px' }}
        />
      </div>
    </section>
  );
}
