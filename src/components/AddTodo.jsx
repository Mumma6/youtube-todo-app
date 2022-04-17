import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo({
      text,
      id: uuidv4(),
      completed: false,
    })
    setText("")
  }

  return (
    <Form style={{ display: "flex" }} onSubmit={onSubmit}>
      <Form.Group style={{ width: "100%", marginBottom: 20 }}>
        <Form.Control
          type="text"
          placeholder="Add todo..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Form.Group>
      <div style={{ marginLeft: 10 }}>
        <Button disabled={!text} type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </Form>
  )
}

export default AddTodo
