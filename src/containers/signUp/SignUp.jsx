import React from 'react';
import './SingUp.scss';
import { PrimaryTitle } from '../../components/PrimaryTitle/PrimaryTitle';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { StandardInput } from '../../components/standardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '../../components/PrimaryLink/PrimaryLink';

export function SignUp() {
  return (
    <section className="signup">
      <div className="signup__form-container">
        <PrimaryTitle
          textContent="My account"
          modifierClassTitle=""
          style={{ marginBlockEnd: '32px' }}
        />
        <StandardForm>
          <StandardInput
            forLabel="nameInput"
            textLabel="Name"
            typeInput="text"
            idInput="nameInput"
            placeholderInput="Jessica Casas"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          />
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

          {/* <StandardInput
            forLabel="rePasswdInput"
            textLabel="Re-enter password"
            typeInput="password"
            idInput="rePasswdInput"
            placeholderInput="*********"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          /> */}

          <PrimaryButton
            buttonType="submit"
            textButton="Create"
            modifierClassButton=""
            style={{ marginBlockStart: '16px', marginBlockEnd: '32px' }}
          />

          <PrimaryLink
            hrefLink="/"
            textLink="I already have an account, log In now"
            modifierClassLink="align-center"
          />
        </StandardForm>
      </div>
    </section>
  );
}
