import React, { useState, useEffect } from "react"
import Header from "./components/Header/Header";
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Container } from "react-bootstrap";

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'первая заметка',
      status: true
    }
  ])
//const [todos, setTodos] = useState(
//   JSON.parse(localStorage('todos')) || []
//  )

  //useEffect(() => {
  //  localStorage.setItem('todos', JSON.stringify(todos))
  //}, [todos])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
