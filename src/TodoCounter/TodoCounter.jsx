import React , {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

export function TodoCounter() {
    const {totalTodos, completedTodos} = useContext(TodoContext);

    return (
        <header>
        <h2 className="TodoCounter">Haz completado {completedTodos} de {totalTodos} tareas</h2>
        </header>
    );
};

