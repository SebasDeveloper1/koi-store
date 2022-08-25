import React from 'react';
import './PasswdRecovery.scss';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { PrimaryTitle } from '../../components/PrimaryTitle/PrimaryTitle';
import { PrimaryParagraph } from '../../components/PrimaryParagraph/PrimaryParagraph';
import { StandardInput } from '../../components/standardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { PrimaryLink } from '../../components/PrimaryLink/PrimaryLink';

export function PasswdRecovery() {
  return (
    <section className="passwd-recovery">
      <div className="passwd-recovery__form-container">
        <img
          src="./assets/images/koi_store_logo.png"
          alt="Koi Store Logo"
          className="passwd-recovery__logo"
        />

        <div className="passwd-recovery__texts-container">
          <PrimaryTitle
            textContent="Password recovery"
            modifierClassTitle="align-center"
            style={{ marginBlockEnd: '4px' }}
          />
          <PrimaryParagraph
            textContent="Inform the email address used to create your account"
            modifierClassParagraph="align-center"
          />
        </div>

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

          <PrimaryButton
            buttonType="submit"
            textButton="Submit"
            modifierClassButton=""
            style={{ marginBlockStart: '40px', marginBlockEnd: '32px' }}
          />

          <PrimaryLink
            hrefLink="/"
            textLink="Back to log in"
            modifierClassLink="align-center"
          />
        </StandardForm>
      </div>
    </section>
  );
}
