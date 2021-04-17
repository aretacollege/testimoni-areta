import React from 'react';
import { Col } from 'react-bootstrap';
import {CardDeck, Card} from "react-bootstrap"
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
const TestimonialsPage = () => {
  return (
    <Col><h2 className="h1-responsive font-weight-bold my-5 text-center">
    Testimoni
  </h2>
    <CardDeck>
    <Card>
      <img src={image1} alt="100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
    <img src={image2} alt="100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
    <img src={image3} alt="100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
  </Col>
  )
}

export default TestimonialsPage;