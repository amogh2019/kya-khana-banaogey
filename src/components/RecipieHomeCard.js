import React from 'react';
import { Card, Button } from 'react-bootstrap';


const RecipieHomeCard = (props) => {
    const { name = '', message = 'message' } = props;

    return <Card border='primary' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="favicon.ico" />
        <Card.Body>
            <Card.Title>Recipie Title</Card.Title>
            <Card.Text>
                Some description about it
      </Card.Text>
            <Button variant="primary">Lessmakeit!</Button>
        </Card.Body>
    </Card>
}


export default RecipieHomeCard
