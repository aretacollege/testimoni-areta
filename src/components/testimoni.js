import React from 'react';
import { Col } from 'react-bootstrap';
import {CardDeck, Card} from "react-bootstrap"

const TestimonialsPage = () => {
  return (
    <Col><h2 className="h1-responsive font-weight-bold my-5 text-center">
    Testimoni
  </h2>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>

    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>

    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>
  </CardDeck>
  </Col>
  )
}

export default TestimonialsPage;