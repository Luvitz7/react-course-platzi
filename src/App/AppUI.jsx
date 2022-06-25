import React from 'react';
// Importamos nuestro contexto
import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext'; 
import { Modal } from '../Modal/Modal';
import { TodoAdd } from '../TodoAdd/TodoAdd';
import { TodoError } from '../TodoError/TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoVoid } from '../TodoVoid/TodoVoid';


export function AppUI() {
    const {
        loading,
        error,
        todoFilter,
        completeTodo,
        deleteTodo,
        modalLayout,
        setModalLayout,
      } = React.useContext(TodoContext);
      return (
        <>
            <TodoCounter />
            <TodoSearch  />
                <TodoList>
                {error && <TodoError />}
                {loading && new Array(5).fill().map((item, index)=> <TodoLoading key={index} /> ) } 
                {(!loading && !todoFilter.length && !error ) && <TodoVoid/>}
                {!error && todoFilter.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    complete={todo.complete} 
                    text={todo.text} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}/>
                  ))}
                </TodoList >
                {!!modalLayout && (
                  <Modal>
                    <TodoAdd/>
                  </Modal>                
                )} 
            <CreateTodoButton setModalLayout={setModalLayout}/> 
        </>
    );
}