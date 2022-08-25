import React from 'react';
import './Header.scss';
import { ImageButton } from '../../components/ImageButton/ImageButton';
import { PrimaryLink } from '../../components/PrimaryLink/PrimaryLink';
import { SecondaryTitle } from '../../components/SecondaryTitle/SecondaryTitle';
import { PrimaryParagraph } from '../../components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';

export function Header() {
  const [headerStates, setHeaderStates] = React.useState({
    menuStatus: false,
    menuContainerStatus: 'nav__menu-container',
    srcIcon: './assets/icons/menu.svg',
  });

  const itemsList = {
    1: { itemName: 'All', itemStatus: true, itemHref: '/home' },
    2: { itemName: 'Clothes', itemStatus: false, itemHref: '/login' },
    3: { itemName: 'Electronics', itemStatus: false, itemHref: '/signup' },
    4: {
      itemName: 'Furniture',
      itemStatus: false,
      itemHref: '/password-recovery',
    },
    5: { itemName: 'Toys', itemStatus: false, itemHref: '/create-password' },
    6: { itemName: 'Others', itemStatus: false, itemHref: '/error404' },
  };

  const onMenu = () => {
    if (!headerStates.menuStatus) {
      setHeaderStates({
        ...headerStates,
        menuStatus: true,
        menuContainerStatus: 'nav__menu-container nav__menu-container--open',
        srcIcon: './assets/icons/menu-close.svg',
      });
    } else {
      setHeaderStates({
        ...headerStates,
        menuStatus: false,
        menuContainerStatus: 'nav__menu-container ',
        srcIcon: './assets/icons/menu.svg',
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <ImageButton
            buttonType="button"
            modifierClassButton="nav__btn-hamburguer-container"
            srcIcon={headerStates.srcIcon}
            altIcon="icon button"
            onClick={onMenu}
          />

          <a className="nav__logo-container" href="/">
            <img
              className="nav__logo-img"
              src="./assets/images/koi_store_logo_basic.png"
              alt="Koi Store Logo"
            />
          </a>

          <div
            className={headerStates.menuContainerStatus}
            style={{ transition: 'clip-path 0.3s ease-in-out' }}
          >
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
                    modifierClassTitle="nav__data-title"
                  />
                  <PrimaryParagraph
                    textContent="koistore@example.com"
                    modifierClassParagraph="nav__data-subtitle"
                  />
                </div>
              </div>
              <PrimaryButton
                buttonType="submit"
                textButton="Log up"
                modifierClassButton="nav__data-btn"
              />
            </section>

            <ul className="nav__list">
              {Object.entries(itemsList).map(([itemId, infoItem]) => (
                <li className="nav__list-item" key={itemId}>
                  <PrimaryLink
                    hrefLink={infoItem.itemHref}
                    textLink={infoItem.itemName}
                    modifierClassLink={
                      infoItem.itemStatus
                        ? `nav__list-link nav__list-link--active`
                        : `nav__list-link`
                    }
                  />
                </li>
              ))}
            </ul>
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
                  modifierClassTitle="nav__data-title"
                />
                <PrimaryParagraph
                  textContent="koistore@example.com"
                  modifierClassParagraph="nav__data-subtitle"
                />
              </div>
            </div>
          </section>
          <ImageButton
            buttonType="button"
            modifierClassButton="nav__btn-shop-container"
            srcIcon="./assets/icons/shopping-car.svg"
            altIcon="icon button"
          />
        </div>
      </nav>
    </header>
  );
}
