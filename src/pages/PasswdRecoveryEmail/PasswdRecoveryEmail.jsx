import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEnvelopeCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import logo from '@images/koi_store_logo.png';
import { Header } from '@containers/Header/Header';
import { useScreenSize } from '@hooks/useScreenSize';
import { StandardForm } from '@components/StandardForm/StandardForm';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import './PasswdRecoveryEmail.scss';

export function PasswdRecoveryEmail() {
  /* A custom hook that returns the width of the screen. */
  const widthScreen = useScreenSize();

  return (
    <>
      {widthScreen > 768 && <Header idSection="5" />}
      <section className="passwd-recovery-email">
        <div className="passwd-recovery-email__form-container">
          <img
            src={logo}
            alt="Koi Store Logo"
            className="passwd-recovery-email__logo"
          />

          <div className="passwd-recovery-email__texts-container">
            <PrimaryTitle
              textContent="Email has been sent!"
              modifierClass="passwd-recovery-email__title"
            />
            <PrimaryParagraph
              textContent="Please check your inbox for instructions on how to reset the password"
              modifierClass="passwd-recovery-email__subtitle"
            />
          </div>

          <figure className="passwd-recovery-email__img-container">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="passwd-recovery-email__img"
              alt=""
            />
          </figure>

          <StandardForm>
            <PrimaryButton
              type="submit"
              textButton="Submit"
              modifierClass="passwd-recovery-email__submit-btn"
            />

            <div className="horiz-section-form">
              <PrimaryParagraph
                textContent="Didn`t receive the email?"
                modifierClass=""
              />
              <PrimaryLink
                href="/"
                textLink="Resend"
                modifierClass="passwd-recovery-email__link"
              />
            </div>
          </StandardForm>
        </div>
      </section>
    </>
  );
}
