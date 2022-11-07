import React from 'react';
import { Header } from '@containers/Header/Header';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { StandardForm } from '@components/StandardForm/StandardForm';
import { StandardInput } from '@components/StandardInput/StandardInput';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import './SingUp.scss';

export function SignUp() {
  return (
    <>
      <Header idSection="3" />
      <section className="signup">
        <div className="signup__form-container">
          <PrimaryTitle
            textContent="My account"
            modifierClass="signup__title"
          />
          <StandardForm>
            <StandardInput
              htmlFor="nameInput"
              textLabel="Name"
              type="text"
              id="nameInput"
              placeholder="Jessica Casas"
              modifierClassInput="signup__input"
              modifierClassLabel=""
            />
            <StandardInput
              htmlFor="emailInput"
              textLabel="Email address"
              type="text"
              id="emailInput"
              placeholder="koistore@example.com"
              modifierClassInput="signup__input"
              modifierClassLabel=""
            />

            <StandardInput
              htmlFor="passwdInput"
              textLabel="Password"
              type="password"
              id="passwdInput"
              placeholder="*********"
              modifierClassInput="signup__input"
              modifierClassLabel=""
            />

            <PrimaryButton
              type="submit"
              textButton="Create"
              modifierClass="signup__create-btn"
            />

            <PrimaryLink
              href="/"
              textLink="I already have an account, log In now"
              modifierClass="signup__link"
            />
          </StandardForm>
        </div>
      </section>
    </>
  );
}
