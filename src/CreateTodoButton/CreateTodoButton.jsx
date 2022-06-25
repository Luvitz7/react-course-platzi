import React from 'react';
import './CreateTodoButton.css'

export function CreateTodoButton(props) {
    const onClick = () => {
        props.setModalLayout(prevState => !prevState);
    }

    return (
        <button 
        className='buttonCreate'
        onClick={onClick}
        >+
        </button> 
    );
}

