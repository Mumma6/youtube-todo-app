import { faCheck, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, ButtonGroup, ListGroup } from "react-bootstrap"

const TodoListItem = ({ todo, removeTodo, toggleCompleted }) => {
  const { text, completed, id } = todo

  return (
    <ListGroup.Item
      style={{
        backgroundColor: completed ? "lightgreen" : "whitesmoke",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          marginBottom: 0,
          textDecoration: completed ? "line-through" : null,
        }}
      >
        {text}
      </p>
      <ButtonGroup size="sm">
        <Button onClick={() => toggleCompleted(id)} variant="info">
          <FontAwesomeIcon icon={completed ? faXmark : faCheck} />
        </Button>
        <Button onClick={() => removeTodo(id)} variant="danger">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  )
}

export default TodoListItem
