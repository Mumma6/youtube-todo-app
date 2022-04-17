import React from "react"
import { ListGroup } from "react-bootstrap"
import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, removeTodo, toggleCompleted }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ListGroup>
  )
}

export default TodoList
