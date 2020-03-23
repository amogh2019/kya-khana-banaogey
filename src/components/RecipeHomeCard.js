import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Redirect} from 'react-router-dom'



const RecipeHomeCard = (props) => {
    const { title = 'RecipeTitle', message = 'message', id = undefined } = props;

    const [clicked, setClicked] = useState(false);


    const navigateToRecipe = (id) => {
        if(id !== undefined){
            setClicked(true); 
        }
    }

    return <Card >
        <Card.Img variant="top" src="favicon.ico" className='p-5'/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Some description about it {message}
             </Card.Text>
            <Button variant="primary" onClick={() => navigateToRecipe(id)}>Lessmakeit!</Button>
        </Card.Body>
         {clicked ? <Redirect push to={'/'+id}/>   : ' '}
    </Card>
}


export default RecipeHomeCard
