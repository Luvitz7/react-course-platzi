import React from 'react'
import './TodoVoid.css'

export const TodoVoid = () => {
  return (
    <div className='container-TodoVoid'>
        <h2>¡Felicidades! ya terminaste tus tareas</h2>
        <h3 className='pending-task'>¿Tienes tareas pendientes?</h3>
        <p className='new-task'>Crea una nueva tarea para empezar</p>
        <div className='pig-image'></div>
    </div>
  )
}
