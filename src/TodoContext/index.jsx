import React , {createContext} from "react";
import { useLocalStorage } from "./useLocalStorage";

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = createContext();

// Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
function TodoProvider(props) {
  // CUSTOM HOOK
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
   } = useLocalStorage('TODOS_V1', []);
  // Estado para el modal del boton
  const [modalLayout, setModalLayout] = React.useState(false);
  // Variables para la logica de la aplicacion
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(item => !!item.complete).length;
  const totalTodos = todos.length;
  let todoFilter = todos.filter(item => item.text.toUpperCase().includes(searchValue.toUpperCase()));

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  };

    /* Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, 
     que recibirá a toda nuestra aplicación, por eso necesitamos la prop children */
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todoFilter,
            completeTodo,
            deleteTodo,
            modalLayout,
            setModalLayout,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};