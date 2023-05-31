import React from 'react'
import Card from 'react-bootstrap/Card'

function Previewer(props) {
  return (
    <div>
        <p id="preview-title">Markdown Previewer</p>
        <Card>
            <Card.Body>
                <div id="preview">

                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Previewer
