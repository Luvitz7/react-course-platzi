import React , {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

export function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const onSearchValueSet = (event) => {setSearchValue(event.target.value);};

    return (
        <input className='TodoSearch' placeholder='Buscar Tarea' onChange={onSearchValueSet} value={searchValue}></input>
    );
};

