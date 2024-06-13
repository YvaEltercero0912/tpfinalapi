import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Tasks.css";


const Task = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false);

  const toggleCompletada = () => {
    setCompletada(!completada);
  };

  return (
    <div className={completada ? 'containerTarea containerTareaCompletada' : 'containerTarea'}>
      <h2 className={completada ? 'completada' : 'noCompletada'}>{tarea.tarea}</h2>
      <button id='completada' onClick={toggleCompletada}>
        {completada ? 'NO completada' : 'Completada'}
      </button>
      <button onClick={() => borrarTarea(tarea.id)} id='eliminar'>Eliminar</button>
    </div>
  );
};

// Definir PropTypes
Task.propTypes = {
  tarea: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tarea: PropTypes.string.isRequired,
  }).isRequired,
  borrarTarea: PropTypes.func.isRequired,
};


export { Task };