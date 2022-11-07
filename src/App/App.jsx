import React from 'react';
import { AppContext } from '@context/AppContext';
import { useShopping } from '@hooks/useShopping';
import { NavigationRoutes } from '@routes/Routes';

export default function App() {
  const shopping = useShopping();
  return (
    <>
      <AppContext.Provider value={shopping}>
        <NavigationRoutes />
      </AppContext.Provider>
    </>
  );
}
