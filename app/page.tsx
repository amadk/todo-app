import { useState, useEffect } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <div className='w-full max-w-md space-x-2 mb-4'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='w-4/5 p-2 border border-gray-300 rounded shadow'
        />
        <button
          onClick={addTodo}
          className='w-1/5 p-2 bg-blue-500 text-white border border-blue-500 rounded shadow hover:bg-blue-600 transition duration-200'>
          Add
        </button>
      </div>
      <ul className='w-full max-w-md space-y-2'>
        {todos.map((todo, index) => (
          <li
            key={index}
            className='flex items-center justify-between p-2 border border-gray-300 rounded shadow'>
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className='p-2 text-red-500 border border-red-500 rounded shadow hover:bg-red-500 hover:text-white transition duration-200'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
    setTodos(newTodos);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <div className='mb-4'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='border p-2'
        />
        <button onClick={addTodo} className='bg-blue-500 text-white p-2 ml-2'>
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='flex items-center mb-2'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              className='mr-2'
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
