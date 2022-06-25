import React , {useContext, useState} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoAdd.css';

export function TodoAdd () {
    const [newTodo, setNewTodo] = useState('');
    const {
            addTodo,
            todoFilter,
            setModalLayout,
        } = useContext(TodoContext);
    
    const validation = (newTodo) => {
        // Busca coicidencias de la nueva tarea con tareas en la lista, para no repetir la misma key
        const todoSearch = todoFilter.map(item => item.text.toUpperCase().includes(newTodo.toUpperCase()));
        // Entrega TRUE si existe alguna coincidencia
        const validationTodo = todoSearch.find(item => item === true);
        {newTodo !== "" && !validationTodo? addTodo(newTodo) : window.alert("Tienes la tarea repetida o dejaste el espacio en blanco") };
    }    
        
    const onKeyPress = (e) => {
        if (e.charCode === 13) {
          e.preventDefault();
          validation(newTodo);
          onCancel();
        } 
    };
    const onChange = (event) => {
        // Cuando sucede el evento y se modifica el elemento toma el valor escrito
        // y le agrega el nuevo estado con el texto modificado
        setNewTodo(event.target.value);
    };
    const onCancel = (e) => {
        setModalLayout(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        validation(newTodo);
        setModalLayout(false);
    };

    return (
        <form onSubmit={onSubmit} onKeyPress={onKeyPress} className="addTodo-container">
            <h2>Nueva tarea</h2>
            <textarea placeholder="Agrega tu nueva tarea" value={newTodo} onChange={onChange}/>
            <div className="button-container">
                <button type='button' onClick={onCancel}>Cancelar</button>
                <button type='submit'>Agregar tarea</button>
            </div>
            <div className='img-container'>
            </div>
        </form>
    );
}