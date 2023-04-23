import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
const Item = (props) => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.foto} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
            {props.texto}
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        <Card.Text>{props.data}</Card.Text>
      </Card.Body>

      <Link className='btn btn-danger' href={`/${props.linkName}/${props.id}`}>Clique aqui</Link>
    </Card>

    </>
  )
}

export default Item