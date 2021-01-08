import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom'; 
import HomeComponent from './components/HomeComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="*" component={HomeComponent} /> 
      </Switch>
    </Router>
  )
}

export default App