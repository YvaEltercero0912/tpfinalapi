import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleChange, addTask, tarea }) => {
  return (
    <div>
      <form onSubmit={addTask}>
        <input type='text' value={tarea} placeholder='Ingresa la tarea..' onChange={handleChange} />
        <button type='submit'>Agregar</button>
      </form>
    </div>
  );
};


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  tarea: PropTypes.string.isRequired,
};

export { Form };