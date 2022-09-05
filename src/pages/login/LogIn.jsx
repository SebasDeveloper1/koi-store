import React from 'react';
import { Header } from '../../containers/Header/Header';
import { useScreenSize } from '../../Hooks/useScreenSize';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { StandardInput } from '../../components/StandardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '../../components/PrimaryLink/PrimaryLink';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';
import './LogIn.scss';

export function Login() {
  /* A custom hook that returns the width of the screen. */
  const widthScreen = useScreenSize();

  return (
    <>
      {widthScreen > 768 && <Header idSection="2" />}
      <section className="login">
        <div className="login__form-container">
          <img
            src="./assets/images/koi_store_logo.png"
            alt="Koi Store Logo"
            className="login__logo"
          />

          <StandardForm>
            <StandardInput
              htmlFor="emailInput"
              textLabel="Email address"
              type="text"
              id="emailInput"
              placeholder="koistore@example.com"
              modifierClassInput="login__input"
              modifierClassLabel=""
            />

            <StandardInput
              htmlFor="passwdInput"
              textLabel="Password"
              type="password"
              id="passwdInput"
              placeholder="*********"
              modifierClassInput="login__input"
              modifierClassLabel=""
            />

            <PrimaryButton
              type="submit"
              textButton="Log in"
              modifierClass="login__login-btn"
            />

            <PrimaryLink
              href="/"
              textLink="Forgot my password"
              modifierClass="login__link"
            />
          </StandardForm>

          <SecondaryButton type="button" textButton="Sign up" />
        </div>
      </section>
    </>
  );
}
