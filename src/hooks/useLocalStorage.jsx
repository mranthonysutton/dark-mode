import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Saving the value to state
    setStoredValue(value);

    // Saving that value to the local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setStoredValue];
};