import React from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap';
import RecipieHomeCard from '../components/RecipieHomeCard';
// import ErrorDiv from '../components/kitchen-sink/ErrorDiv';


export default function HomePage() {
  return (
    <Card className="text-center">
      <Card.Header>Welcome to the world of Recipies!</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>

        </Card.Text>
        <h1>Kya Khana Banaogey?</h1>

        <Container>
          <CardDeck>
            <RecipieHomeCard />
            <RecipieHomeCard />
            <RecipieHomeCard />
            <RecipieHomeCard />
            <RecipieHomeCard />
          </CardDeck>
        </Container>

      </Card.Body>
      <Card.Footer className="text-muted">Made in Spandhana</Card.Footer>
    </Card>
  )
}
