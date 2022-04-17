import React, { useState } from "react"
import { Button, Container } from "react-bootstrap"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    )
  }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <Container
      style={{
        backgroundColor: "white",
        width: 600,
        marginTop: 50,
        padding: 20,
        borderRadius: 5,
        boxShadow: "0 5px 5px rgba(0, 0, 0, .2)",
      }}
    >
      <h2>Todos</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
      <Button
        disabled={!todos.length}
        onClick={clearAll}
        style={{ marginTop: 10 }}
        variant="danger"
      >
        Clear all
      </Button>
    </Container>
  )
}

export default Todo
