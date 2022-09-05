import React from 'react';
import {
  faShoppingCart,
  faCartArrowDown,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { ImageButton } from '../../components/ImageButton/ImageButton';
import { SecondaryTitle } from '../../components/SecondaryTitle/SecondaryTitle';
import { PrimaryParagraph } from '../../components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { NavList } from '../../components/NavList/NavList';
import { navigationItemList } from '../../utils/navigationItemList';
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';
import { useProducts } from '../../Hooks/useProducts';
import './Header.scss';

export function Header(props) {
  const { idSection } = props;
  const [headerStates, setHeaderStates] = React.useState({
    menuStatus: false,
    menuContainerStatus: 'nav__menu-container',
    srcIcon: faBars,
  });

  const onMenu = () => {
    if (!headerStates.menuStatus) {
      setHeaderStates({
        ...headerStates,
        menuStatus: true,
        menuContainerStatus: 'nav__menu-container nav__menu-container--open',
        srcIcon: faClose,
      });
    } else {
      setHeaderStates({
        ...headerStates,
        menuStatus: false,
        menuContainerStatus: 'nav__menu-container ',
        srcIcon: faBars,
      });
    }
  };

  const {
    stateProducts,
    onClickOpenShoppingCart,
    handleKeyDownOpenShoppingCart,
    onClickCloseShoppingCart,
    handleKeyDownCloseShoppingCart,
  } = useProducts();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <ImageButton
            type="button"
            modifierClass="nav__btn-hamburguer-container"
            srcIcon={headerStates.srcIcon}
            altIcon="Go to start"
            onClick={onMenu}
          />

          <a className="nav__logo-container" href="/">
            <img
              className="nav__logo-img"
              src="./assets/images/koi_store_logo_basic.png"
              alt="Koi Store Logo"
            />
          </a>

          <div className={headerStates.menuContainerStatus}>
            <section className="nav__info-container nav__info-container--mobile">
              <div className="nav__info-data-container">
                <img
                  className="nav__info-image"
                  src="./assets/icons/profile-user.png"
                  alt="user"
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

            <NavList
              /* Passing the result of the function navigationItemList to the itemsList prop. */
              itemsList={navigationItemList({ idItem: idSection })}
              modifierClassList=""
              modifierClassItemList=""
            />
          </div>

          <section className="nav__info-container nav__info-container--desktop">
            <div className="nav__info-data-container nav__info-data-container--desktop">
              <img
                className="nav__info-image"
                src="./assets/icons/profile-user.png"
                alt="user"
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
          </section>
          <ImageButton
            type="button"
            modifierClass="nav__btn-shop-container"
            srcIcon={
              stateProducts.openShoppingCart ? faCartArrowDown : faShoppingCart
            }
            onClick={
              stateProducts.openShoppingCart
                ? onClickCloseShoppingCart
                : onClickOpenShoppingCart
            }
            onKeyDown={
              stateProducts.openShoppingCart
                ? handleKeyDownCloseShoppingCart
                : handleKeyDownOpenShoppingCart
            }
          />
          <ShoppingCart
            modifierClass={
              stateProducts.openShoppingCart ? `shopping-cart--open` : ``
            }
          />
        </div>
      </nav>
    </header>
  );
}
