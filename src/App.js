import React from 'react';
import { Switch ,Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.component'

const HatsPage = () => {
    return (
    <div>
        <h1>HATS PAGES</h1>
    </div>)
}

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
