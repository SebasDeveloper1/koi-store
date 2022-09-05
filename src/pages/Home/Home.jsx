import React from 'react';
import { Header } from '../../containers/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { NavList } from '../../components/NavList/NavList';
import { navigationItemList } from '../../utils/navigationItemList';
import { StandarSelectList } from '../../components/StandarSelectList/StandarSelectList';
import { GenericList } from '../../containers/GenericList/GenericList';
import { ProducCard } from '../../components/ProducCard/ProducCard';
import { useProducts } from '../../Hooks/useProducts';
import { Modal } from '../../containers/Modal/Modal';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import './Home.scss';

export function Home() {
  const dataListOpstions = ['Most recent', 'Less recent'];

  /* Destructuring the object returned by the hook. */
  const {
    stateProducts,
    onClickOpenModal,
    handleKeyDownOpenModal,
    onClickCloseModal,
    handleKeyDownCloseModal,
  } = useProducts();

  return (
    <>
      <Header idSection="1" />
      <main className="home">
        <section className="home__search-section-container">
          <section className="home__search-section">
            <SearchInput
              type="text"
              id="searchInput"
              placeholder="Search product..."
            />
            <StandarSelectList
              id="idTypeFilter"
              textLabel="Order: "
              nameSelect="typeFilter"
              modifierClassContainer="home__select-container"
              modifierClassSelect=""
              dataListOpstions={dataListOpstions}
            />
          </section>
          <div className="home__navbar-container">
            <NavList
              itemsList={navigationItemList({ idItem: 1 })}
              modifierClassList="nav__list--home"
              modifierClassItemList="nav__list-item--home"
              modifierClassItem="nav__list-link--home"
            />
          </div>
        </section>
        <section className="home__products-container">
          <GenericList>
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
            <ProducCard
              idProduct="32"
              productPrice="456"
              productTitle="Licensed Plastic Pizza"
              srcProductImage="https://api.lorem.space/image?w=640&h=480&r=2935"
              onClick={onClickOpenModal}
              onKeyDown={handleKeyDownOpenModal}
            />
          </GenericList>
        </section>
        <Modal
          modifierClass={stateProducts.openModal ? 'modal-container--open' : ''}
        >
          <ProductDetail
            onClickCloseModal={onClickCloseModal}
            handleKeyDownCloseModal={handleKeyDownCloseModal}
          />
        </Modal>
      </main>
    </>
  );
}
