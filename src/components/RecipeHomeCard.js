import React from 'react';
import { Card, Button } from 'react-bootstrap';


const RecipeHomeCard = (props) => {
    const { name = '', message = 'message' } = props;

    return <Card >
        <Card.Img variant="top" src="favicon.ico" className='p-5'/>
        <Card.Body>
            <Card.Title>Recipe Title</Card.Title>
            <Card.Text>
                Some description about it
      </Card.Text>
            <Button variant="primary">Lessmakeit!</Button>
        </Card.Body>
    </Card>
}


export default RecipeHomeCard