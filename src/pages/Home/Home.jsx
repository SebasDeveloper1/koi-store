import React from 'react';
import { navigationItemList } from '@utils/navigationItemList';
import { useEvents } from '@hooks/useEvents';
import { useProduts } from '@hooks/useProducts';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { NavList } from '@components/NavList/NavList';
import { StandarSelectList } from '@components/StandarSelectList/StandarSelectList';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { ProductDetail } from '@components/ProductDetail/ProductDetail';
import { Header } from '@containers/Header/Header';
import { GenericList } from '@containers/GenericList/GenericList';
import { Modal } from '@containers/Modal/Modal';
import './Home.scss';

export function Home() {
  const dataListOpstions = ['Most recent', 'Less recent'];

  /* Destructuring the state, handleModal and handleModalDown from the useEvents hook. */
  const { state, handleModal, handleModalDown } = useEvents();

  /* Destructuring the productList from the useProduts hook. */
  const { productList, loading, error } = useProduts();

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
            {loading ? (
              <p> Cargando...</p>
            ) : error ? (
              <p>Error...</p>
            ) : (
              productList.map((product) => (
                <ProductCard
                  key={`product-list__${product.id}`}
                  productInfo={product}
                  onClick={() => handleModal({ modalInfo: product })}
                  onKeyDown={(event) => {
                    handleModalDown(event, { modalInfo: product });
                  }}
                />
              ))
            )}
          </GenericList>
        </section>
        <Modal
          modifierClass={
            state.openModal.modalState ? `modal-container--open` : ``
          }
        >
          <ProductDetail
            productInfo={state.openModal.modalInfo}
            onClickCloseModal={() => handleModal({ modalInfo: {} })}
            handleKeyDownCloseModal={(event) =>
              handleModalDown(event, { modalInfo: {} })
            }
          />
        </Modal>
      </main>
    </>
  );
}
