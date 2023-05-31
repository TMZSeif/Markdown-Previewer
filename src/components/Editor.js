import React from 'react'
import Form from 'react-bootstrap/Form'

const Editor = props => {

  const handleChange = event => {
    props.addInput(event.target.value);
  }

  return (
    <Form>
        <Form.Group>
            <Form.Label>Markdown Editor</Form.Label>
            <Form.Control as="textarea" onChange={handleChange} value={props.input} id="editor" rows="23"></Form.Control>
        </Form.Group>
    </Form>
  )
}

export default Editor