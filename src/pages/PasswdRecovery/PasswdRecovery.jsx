import React from 'react';
import logo from '@images/koi_store_logo.png';
import { Header } from '@containers/Header/Header';
import { useScreenSize } from '@hooks/useScreenSize';
import { StandardForm } from '@components/StandardForm/StandardForm';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { StandardInput } from '@components/StandardInput/StandardInput';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import './PasswdRecovery.scss';

export function PasswdRecovery() {
  /* A custom hook that returns the width of the screen. */
  const widthScreen = useScreenSize();

  return (
    <>
      {widthScreen > 768 && <Header idSection="4" />}
      <section className="passwd-recovery">
        <div className="passwd-recovery__form-container">
          <img
            src={logo}
            alt="Koi Store Logo"
            className="passwd-recovery__logo"
          />

          <div className="passwd-recovery__texts-container">
            <PrimaryTitle
              textContent="Password recovery"
              modifierClass="passwd-recovery__title"
            />
            <PrimaryParagraph
              textContent="Inform the email address used to create your account"
              modifierClass="passwd-recovery__subtitle"
            />
          </div>

          <StandardForm>
            <StandardInput
              htmlFor="emailInput"
              textLabel="Email address"
              type="text"
              id="emailInput"
              placeholder="koistore@example.com"
              modifierClassInput="passwd-recovery__input"
              modifierClassLabel=""
            />

            <PrimaryButton
              type="submit"
              textButton="Submit"
              modifierClass="passwd-recovery__submit-btn"
            />

            <PrimaryLink
              href="/"
              textLink="Back to log in"
              modifierClass="passwd-recovery__link"
            />
          </StandardForm>
        </div>
      </section>
    </>
  );
}
