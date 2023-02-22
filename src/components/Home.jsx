import React, { useEffect, useState } from 'react';

function Home() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fresh = JSON.parse(localStorage.getItem('todo'));
    if (fresh) {
      setTodos(fresh);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    setTodos([...todos, { id: Math.ceil(Math.random() * 1000), value: input, completed: false }]);
    localStorage.setItem('todo', JSON.stringify(todos));
    setInput('');
  };

  const handleDelete = (id) => {
    const filt = todos.filter((tod) => tod.id !== id);
    setTodos(filt);
    localStorage.setItem('todo', JSON.stringify(todos));
  };

  const handleChange = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        localStorage.setItem('todo', JSON.stringify(todos));
        setTodos([...todos]);
      }
    });
  };

  return (
    <div className="all">
      <div className="hea">
        <h2>todos .</h2>
        <p>Items will persist in the browser local storage</p>
      </div>

      <form action="" onSubmit={handlesubmit} className="Hform">
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value); }} />
        <button type="submit" aria-label="mute volume"><i className="fa-solid fa-plus" /></button>
      </form>

      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="mssge">
              <input type="checkbox" checked={todo.completed} onChange={() => { handleChange(todo.id); }} className="checkbox" />
              <input type="text" value={todo.value} readOnly className={todo.completed ? 'line' : undefined} />
            </div>

            <i className="fa-solid fa-trash" onClick={() => { handleDelete(todo.id); }} role="none" onKeyDown={() => { handleDelete(todo.id); }} />
          </div>

        ))}
      </div>

    </div>
  );
}

export default Home;
