import React from 'react'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import RecipieHomeCard from '../components/RecipieHomeCard';
// import ErrorDiv from '../components/kitchen-sink/ErrorDiv';


export default function HomePage() {
  return (
    <Card className="text-center">
      <Card.Header>Welcome to the World of Recipies!</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        <h1 >Kya Khana Banaogey?</h1>
        </Card.Text>
      
        <Container className='mt-5'>
          <Row>
            <Col xs={3} >
              {/* <CardDeck> */}
              <RecipieHomeCard />
            </Col>
            <Col xs={3} >
              {/* <CardDeck> */}
              <RecipieHomeCard />
            </Col>
            <Col xs={3} >
              {/* <CardDeck> */}
              <RecipieHomeCard />
            </Col>
            <Col xs={3} >
              {/* <CardDeck> */}
              <RecipieHomeCard />
            </Col>
          </Row>
        </Container>

      </Card.Body>
      <Card.Footer className="text-muted">Made in Shriram Spandhana</Card.Footer>
    </Card>
  )
}
