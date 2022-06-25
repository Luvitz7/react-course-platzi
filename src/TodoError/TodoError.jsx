import React from 'react'
import './TodoError.css'

export const TodoError = () => {
  return (
    <div className='container-TodoError'>
        <h2 >¡Upss! No pudimos cargar tus tareas</h2>
        <h3 className='update-pag'>Intenta actualizar la pagina en unos minutos</h3>
        <div className='crash-image'></div>
    </div>
  )
}
