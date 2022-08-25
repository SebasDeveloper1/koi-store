import React from 'react';
import './LogIn.scss';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { StandardInput } from '../../components/standardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '../../components/PrimaryLink/PrimaryLink';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';
import { Header } from '../Header/Header';

export function Login() {
  return (
    <section className="login">
      {window.screen.width > 768 && <Header />}
      {/* <Header /> */}

      <div className="login__form-container">
        <img
          src="./assets/images/koi_store_logo.png"
          alt="Koi Store Logo"
          className="login__logo"
        />

        <StandardForm>
          <StandardInput
            forLabel="emailInput"
            textLabel="Email address"
            typeInput="text"
            idInput="emailInput"
            placeholderInput="koistore@example.com"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          />

          <StandardInput
            forLabel="passwdInput"
            textLabel="Password"
            typeInput="password"
            idInput="passwdInput"
            placeholderInput="*********"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          />

          <PrimaryButton
            buttonType="submit"
            textButton="Log in"
            modifierClassButton=""
            style={{ marginBlockStart: '16px', marginBlockEnd: '32px' }}
          />

          <PrimaryLink
            hrefLink="/"
            textLink="Forgot my password"
            modifierClassLink="align-center"
            style={{ marginBlockEnd: '48px' }}
          />
        </StandardForm>

        <SecondaryButton
          buttonType="button"
          textButton="Sign up"
          modifierClassButton=""
        />
      </div>
    </section>
  );
}
