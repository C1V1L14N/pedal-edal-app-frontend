import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          
        
        <Switch>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
