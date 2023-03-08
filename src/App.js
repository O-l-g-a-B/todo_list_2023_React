import React, { useState, useEffect } from "react"
import Header from "./components/Header/Header";
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Container } from "react-bootstrap";

const LOCAL_STORAGE_KEY = 'tododo:todo';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'первая заметка',
      status: true
    }
  ])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTodo(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTodo(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} setTasksAndSave={setTasksAndSave} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
