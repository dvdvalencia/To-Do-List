// // hooks/useLocalStorage.js
// import { useState, useEffect } from 'react';

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(storedValue));
//   }, [key, storedValue]);

//   return [storedValue, setStoredValue];
// };

// export default useLocalStorage;

import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isMounted, setIsMounted] = useState(false); // Estado para controlar el montaje

  useEffect(() => {
    setIsMounted(true); // Marcar como montado
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  useEffect(() => {
    if (isMounted) { // Solo actualizar localStorage si está montado
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue, isMounted]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;