import React from 'react';
import logo from '@images/koi_store_logo.png';
import { Header } from '@containers/Header/Header';
import { useScreenSize } from '@hooks/useScreenSize';
import { StandardForm } from '@components/StandardForm/StandardForm';
import { StandardInput } from '@components/StandardInput/StandardInput';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import { SecondaryButton } from '@components/SecondaryButton/SecondaryButton';
import './LogIn.scss';

export function Login() {
  /* A custom hook that returns the width of the screen. */
  const widthScreen = useScreenSize();

  const form = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userEmail: formData.get('emailInput'),
      userPassword: formData.get('passwdInput'),
    };
  };

  return (
    <>
      {widthScreen > 768 && <Header idSection="2" />}
      <section className="login">
        <div className="login__form-container">
          <img src={logo} alt="Koi Store Logo" className="login__logo" />

          <StandardForm onSubmit={handleSubmit} refs={form}>
            <StandardInput
              htmlFor="emailInput"
              textLabel="Email address"
              type="text"
              id="emailInput"
              name="emailInput"
              placeholder="koistore@example.com"
              modifierClassInput="login__input"
              modifierClassLabel=""
            />

            <StandardInput
              htmlFor="passwdInput"
              textLabel="Password"
              type="password"
              id="passwdInput"
              name="passwdInput"
              placeholder="*********"
              modifierClassInput="login__input"
              modifierClassLabel=""
            />

            <PrimaryButton
              type="submit"
              textButton="Log in"
              modifierClass="login__login-btn"
              // onClick={handleSubmit}
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
