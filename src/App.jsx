import { useState, useEffect } from 'react';
import './App.css';
import { Task } from './assets/components/Task';
import { Form } from './assets/components/Form';
import TodoList from "./assets/components/listas";



function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleChange = e => {
    setTarea(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    if (tarea.trim() === "") {
      alert("Debes agregar algo");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    };

    setTareas([nuevaTarea, ...tareas]);
    setTarea("");
  };

  const borrarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <h2 className='listatxt'>Lista de Tareas</h2>
      <Form
        handleChange={handleChange}
        addTask={addTask}
        tarea={tarea}
      />
      {tareas.length > 0 && (
        <button onClick={() => setTareas([])}>Vaciar tareas</button>
      )}
      {tareas.map(tarea => (
        <Task
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        
        />
        
      ))}
    <TodoList></TodoList>
    </>
  );
}

export default App;