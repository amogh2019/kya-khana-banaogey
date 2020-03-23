import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import RecipeHomeCard from '../components/RecipeHomeCard';
// import ErrorDiv from '../components/kitchen-sink/ErrorDiv';
import { data as recipe_data }from '../datastore/recipe_data.js';

export default function HomePage() {
  return (
    <Card className="text-center">
      <Card.Header>Welcome to the World of Recipes!</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <h1 >Kya Khana Banaogey?</h1>
        </Card.Text>
        {console.log(recipe_data)}
        <Container className='mt-5'>
          <Row>
            {
              
              Object.values(recipe_data).map( (object) => {
              return <Col xs={3} key={object.id}>
                        <RecipeHomeCard title={object.title} id={object.id}/>
                    </Col>
              })
            }
            <Col xs={3} >
              <RecipeHomeCard />
            </Col>
            <Col xs={3} >

              <RecipeHomeCard />
            </Col>
          </Row>
        </Container>

      </Card.Body>
      <Card.Footer className="text-muted">Made in Shriram Spandhana</Card.Footer>
    </Card>
  )
}
