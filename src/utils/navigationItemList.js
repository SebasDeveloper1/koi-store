export function navigationItemList({ idItem }) {
  const itemsList = {
    1: { itemName: 'Home', itemStatus: false, itemHref: '/home' },
    2: { itemName: 'Login', itemStatus: false, itemHref: '/login' },
    3: { itemName: 'Signup', itemStatus: false, itemHref: '/signup' },
    4: {
      itemName: 'Pass-Reco',
      itemStatus: false,
      itemHref: '/password-recovery',
    },
    5: {
      itemName: 'Pass-Reco-Email',
      itemStatus: false,
      itemHref: '/password-recovery-email',
    },
    6: {
      itemName: 'Create-Pass',
      itemStatus: false,
      itemHref: '/create-password',
    },
    7: {
      itemName: 'Error404',
      itemStatus: false,
      itemHref: '/error404',
    },
  };

  itemsList[idItem] = { ...itemsList[idItem], itemStatus: true };

  return itemsList;
}
