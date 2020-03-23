
import React from 'react'
import { data as recipe_data }from '../datastore/recipe_data';




// this is the react hook way for writing react components // refer snake card to see the react class way of writing component
const RecipeDataCard = (props) => {

  return (
    <div className="container">
        <p>{JSON.stringify(recipe_data[props.match.params.id])}</p>
    </div>
  )
}


export default RecipeDataCard;