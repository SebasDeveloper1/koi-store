export function userMenuItemList() {
  const itemsList = {
    1: { itemName: 'My orders', itemStatus: false, itemHref: '/home' },
    2: { itemName: 'My account', itemStatus: false, itemHref: '/login' },
    3: { itemName: 'Sign out', itemStatus: true, itemHref: '/signup' },
  };

  // itemsList[idItem] = { ...itemsList[idItem], itemStatus: true };

  return itemsList;
}
