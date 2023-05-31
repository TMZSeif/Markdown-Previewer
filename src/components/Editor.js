import React from 'react'
import Form from 'react-bootstrap/Form'

const Editor = props => {
  return (
    <Form>
        <Form.Group>
            <Form.Label>Markdown Editor</Form.Label>
            <Form.Control as="textarea" id="editor" rows="23"></Form.Control>
        </Form.Group>
    </Form>
  )
}

export default Editor