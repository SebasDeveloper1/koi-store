export function useLocalStorage({ itemName, initialValue }) {
  try {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    return { parsedItem };
  } catch (error) {
    console.log(
      '🚀 ~ file: useLocalStorage.js ~ line 15 ~ useLocalStorage ~ error',
      error
    );
  }
}
