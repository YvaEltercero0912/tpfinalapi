import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Tasks.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className={todo.completed ? "containerTarea containerTareaCompletada" : "containerTarea"}>
          <h2 className={todo.completed ? "completed" : ""}>{todo.title}</h2>
          <div className="buttons">
            <button id='completada' onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? "noCompletada" : "Completada"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

