import React from 'react';
import './CreateNewpasswd.scss';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { PrimaryTitle } from '../../components/PrimaryTitle/PrimaryTitle';
import { PrimaryParagraph } from '../../components/PrimaryParagraph/PrimaryParagraph';
import { StandardInput } from '../../components/standardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';

export function CreateNewpasswd() {
  return (
    <section className="new-passwd">
      <div className="new-passwd__form-container">
        <img
          src="./assets/images/koi_store_logo.png"
          alt="Koi Store Logo"
          className="new-passwd__logo"
        />

        <div className="new-passwd__texts-container">
          <PrimaryTitle
            textContent="Create a new password"
            modifierClassTitle="align-center"
            style={{ marginBlockEnd: '4px' }}
          />
          <PrimaryParagraph
            textContent="Enter a new password for your account"
            modifierClassParagraph="align-center"
          />
        </div>

        <StandardForm>
          <StandardInput
            forLabel="passwdInput"
            textLabel="Password"
            typeInput="password"
            idInput="passwdInput"
            placeholderInput="*********"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          />

          <StandardInput
            forLabel="rePasswdInput"
            textLabel="Re-enter password"
            typeInput="password"
            idInput="rePasswdInput"
            placeholderInput="*********"
            modifierClassInput=""
            style={{ marginBlockEnd: '24px' }}
          />

          <PrimaryButton
            buttonType="submit"
            textButton="Confirm"
            modifierClassButton=""
            style={{ marginBlockStart: '40px', marginBlockEnd: '32px' }}
          />
        </StandardForm>
      </div>
    </section>
  );
}
