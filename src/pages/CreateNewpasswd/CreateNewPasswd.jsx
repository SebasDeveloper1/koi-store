import React from 'react';
import { Header } from '../../containers/Header/Header';
import { useScreenSize } from '../../Hooks/useScreenSize';
import { StandardForm } from '../../components/StandardForm/StandardForm';
import { PrimaryTitle } from '../../components/PrimaryTitle/PrimaryTitle';
import { PrimaryParagraph } from '../../components/PrimaryParagraph/PrimaryParagraph';
import { StandardInput } from '../../components/StandardInput/StandardInput';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import './CreateNewPasswd.scss';

export function CreateNewPasswd() {
  /* A custom hook that returns the width of the screen. */
  const widthScreen = useScreenSize();

  return (
    <>
      {widthScreen > 768 && <Header idSection="6" />}
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
              modifierClass="new-passwd__title"
            />
            <PrimaryParagraph
              textContent="Enter a new password for your account"
              modifierClass="new-passwd__subtitle"
            />
          </div>

          <StandardForm>
            <StandardInput
              htmlFor="passwdInput"
              textLabel="Password"
              type="password"
              id="passwdInput"
              placeholder="*********"
              modifierClassInput="new-passwd__input"
              modifierClassLabel=""
            />

            <StandardInput
              htmlFor="rePasswdInput"
              textLabel="Re-enter password"
              type="password"
              id="rePasswdInput"
              placeholder="*********"
              modifierClassInput="new-passwd__input"
              modifierClassLabel=""
            />

            <PrimaryButton
              type="submit"
              textButton="Confirm"
              modifierClass="new-passwd__btn"
            />
          </StandardForm>
        </div>
      </section>
    </>
  );
}
