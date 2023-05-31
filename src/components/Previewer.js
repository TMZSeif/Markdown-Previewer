import React from 'react'
import Card from 'react-bootstrap/Card'
import Markdown from 'marked-react'

function Previewer(props) {
  return (
    <div>
        <p id="preview-title">Markdown Previewer</p>
        <Card>
            <Card.Body>
                <div id="preview">
                  <Markdown>{props.input}</Markdown>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Previewer
