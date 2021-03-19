import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './Components/nav-bar';
import Loading from './Components/loading';
import Header from './Components/Header.js'



import './App.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
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
