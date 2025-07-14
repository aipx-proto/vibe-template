import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function TodoApp() {
  const [todos, setTodos] = useState([
    { text: 'Try the TODO app!', done: false },
    { text: 'Add a new task below', done: false },
  ]);
  const [deleted, setDeleted] = useState([]);
  const [input, setInput] = useState('');
  const [tab, setTab] = useState('active');

  function addTodo(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { text: input.trim(), done: false }]);
    setInput('');
  }

  function toggleTodo(idx) {
    setTodos(todos => todos.map((todo, i) => i === idx ? { ...todo, done: !todo.done } : todo));
  }

  function deleteTodo(idx) {
    setDeleted(deleted => [{ ...todos[idx], deletedAt: Date.now() }, ...deleted]);
    setTodos(todos => todos.filter((_, i) => i !== idx));
  }

  function restoreTodo(idx) {
    setTodos(todos => [...todos, { text: deleted[idx].text, done: false }]);
    setDeleted(deleted => deleted.filter((_, i) => i !== idx));
  }

  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-xl p-8 gap-6">
      <h1 className="text-3xl text-heading font-semibold mb-2">TODO List</h1>
      <nav className="tabs w-full mb-2">
        <button className={`tab${tab === 'active' ? ' selected' : ''}`} onClick={() => setTab('active')}>Active</button>
        <button className={`tab${tab === 'deleted' ? ' selected' : ''}`} onClick={() => setTab('deleted')}>Deleted</button>
      </nav>
      {tab === 'active' && (
        <>
          <form className="flex gap-2 w-full" onSubmit={addTodo}>
            <input
              className="flex-1"
              type="text"
              placeholder="Add a new task..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button className="type-primary" type="submit">Add</button>
          </form>
          <ul className="w-full flex flex-col gap-2">
            {todos.length === 0 && (
              <li className="text-muted text-center">No tasks yet!</li>
            )}
            {todos.map((todo, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-card rounded-md p-3 shadow-xs">
                <label className="flex items-center gap-2 cursor-pointer w-full">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(idx)}
                  />
                  <span className={todo.done ? 'text-muted line-through' : 'text-body'}>{todo.text}</span>
                </label>
                <button
                  className="icon-only type-subtle"
                  title="Delete"
                  onClick={() => deleteTodo(idx)}
                  type="button"
                >
                  <vibe-icon name="delete" />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      {tab === 'deleted' && (
        <ul className="w-full flex flex-col gap-2">
          {deleted.length === 0 && (
            <li className="text-muted text-center">No deleted tasks!</li>
          )}
          {deleted.map((todo, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-card rounded-md p-3 shadow-xs opacity-70">
              <span className="flex-1 text-muted line-through">{todo.text}</span>
              <button
                className="icon-only type-subtle"
                title="Restore"
                onClick={() => restoreTodo(idx)}
                type="button"
              >
                <vibe-icon name="arrow-undo" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);