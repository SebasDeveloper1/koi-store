/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  faUserCircle,
  faShoppingCart,
  faCartArrowDown,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import logoBasic from '@images/koi_store_logo_basic.png';
import { ImageButton } from '@components/ImageButton/ImageButton';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { NavList } from '@components/NavList/NavList';
import { navigationItemList } from '@utils/navigationItemList';
import { UserMenu } from '@components/UserMenu/UserMenu';
import { userMenuItemList } from '@utils/userMenuItemList';
import { ShoppingCart } from '@components/ShoppingCart/ShoppingCart';
import { useEvents } from '@hooks/useEvents';
import './Header.scss';

export function Header(props) {
  const { idSection } = props;

  /* Destructuring the state, handleHeaderMenu, handleUserMenu, handleShoppingCart from the useEvents
hook. */
  const { state, handleHeaderMenu, handleUserMenu, handleShoppingCart } =
    useEvents();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <ImageButton
            type="button"
            modifierClass="nav__btn-hamburguer-container"
            typeIcon="FontAwesomeIcon"
            srcIcon={!state.openMenuHeader ? faBars : faClose}
            altIcon="Go to start"
            onClick={handleHeaderMenu}
          />

          <a className="nav__logo-container" href="/">
            <img
              className="nav__logo-img"
              src={logoBasic}
              alt="Koi Store Logo"
            />
          </a>

          <div
            /* A ternary operator. If the state.openMenuHeader is true, it will add the class
            nav__menu-container--open to the className. */
            className={`nav__menu-container ${
              state.openMenuHeader ? `nav__menu-container--open` : ``
            }`}
          >
            <section className="nav__info-container nav__info-container--mobile">
              <div className="nav__info-data-container">
                <ImageButton
                  type="button"
                  modifierClass="nav__info-image"
                  typeIcon="FontAwesomeIcon"
                  srcIcon={faUserCircle}
                  altIcon="User"
                />
                <div className="nav__info-data-text">
                  <SecondaryTitle
                    textContent="Jessica Casas"
                    modifierClass="nav__data-title"
                  />
                  <PrimaryParagraph
                    textContent="koistore@example.com"
                    modifierClass="nav__data-subtitle"
                  />
                </div>
              </div>
              <PrimaryButton
                type="submit"
                textButton="Log up"
                modifierClass="nav__data-btn"
              />
            </section>

            <UserMenu
              itemsList={userMenuItemList()}
              modifierClassList="user-menu__list--mobile"
              modifierClassItemList=""
            />

            <SecondaryTitle
              textContent="Categories..."
              modifierClass="nav__categories-title"
            />

            <NavList
              /* Passing the result of the function navigationItemList to the itemsList prop. */
              itemsList={navigationItemList({ idItem: idSection })}
              modifierClassList=""
              modifierClassItemList=""
            />
          </div>

          <section className="nav__info-container nav__info-container--desktop">
            <div className="nav__info-data-container nav__info-data-container--desktop">
              <ImageButton
                type="button"
                modifierClass="nav__info-image"
                typeIcon="FontAwesomeIcon"
                srcIcon={faUserCircle}
                altIcon="User"
                onClick={handleUserMenu}
              />
              <div className="nav__info-data-text">
                <SecondaryTitle
                  textContent="Jessica Casas"
                  modifierClass="nav__data-title"
                />
                <PrimaryParagraph
                  textContent="koistore@example.com"
                  modifierClass="nav__data-subtitle"
                />
              </div>
            </div>
            {state.openUserMenu && (
              /* A ternary operator. If the state.openUserMenu is true, it will
              render the UserMenu component. */
              <UserMenu
                itemsList={userMenuItemList()}
                modifierClassList="user-menu__list--desktop"
                modifierClassItemList=""
              />
            )}
          </section>
          <ImageButton
            type="button"
            modifierClass="nav__btn-shop-container"
            typeIcon="FontAwesomeIcon"
            srcIcon={state.openShoppingCart ? faCartArrowDown : faShoppingCart}
            onClick={handleShoppingCart}
          />
          <ShoppingCart
            modifierClass={state.openShoppingCart ? `shopping-cart--open` : ``}
          />
        </div>
      </nav>
    </header>
  );
}
