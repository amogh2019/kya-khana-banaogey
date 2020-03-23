import React from 'react'
import { Route, Redirect, HashRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDataCard from  './components/RecipeDataCard'
// import UserPage from './pages/UserPage'
// import SnakeHome from './pages/SnakeHome'


export default function App() {
  return (
    <HashRouter>
      <Redirect exact from="/" to="home" />
      <Route exact path="/home" component={HomePage} />
      <Route path="/:id" component={RecipeDataCard} />
    </HashRouter>
  )
}
