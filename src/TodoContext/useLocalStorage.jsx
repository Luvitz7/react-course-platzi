import React from "react";

export function useLocalStorage(itemName, initialValue) {
    // Estado de carga
    const [loading, setLoading] = React.useState(true);
    // Estado
    const [item, setItem] = React.useState(initialValue);
    // Estado de error
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        // Pesistencia
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem; 
  
          if (!localStorageItem) {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
          } else {
          parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false); 
        } catch(error) {
          console.error(error);
          setError(error);
        }
      }, 1000 );},[]
    );

    // Puente entre LocalStorage y el estado de la apliacion 
    const saveItem = (newItem) => {
        try {
          const stringifiedTodo = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedTodo);
          setItem(newItem);
        } catch (error) {
          console.error(error);
          setError(error);
        }
      }
    return { item, saveItem, loading ,error };
}