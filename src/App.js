import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import Header from './Components/Header.js'



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        
        <Switch>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
