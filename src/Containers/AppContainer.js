import React, {useState, useEffect} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from '../Components/nav-bar';
import Loading from '../Components/loading';
import Header from '../Components/Header';
import LandingPage from './LandingPageContainer';

import '../AppContainer.css';
import '../Style/Header.css';

const AppContainer = () => {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  const getUserData = async () => {
    if (user){
      const { email, picture } = user;
      console.log("getting user data");
      console.log("NAME IS " + email)
      return await fetch(`http://localhost:8080/api/users?useremail=${email}`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .then(() => setUserLoggedIn(true))
      .then(() => console.log("location: " + userData[0].location))
      .then(() => console.log("name: " + userData[0].name))
      .then(() => console.log("1st pedal: " + userData[0].pedals[0].name))
    //   .then(() => createProfilePic(picture));
    }
  }

  useEffect(() => {
    getUserData();
  }, [isAuthenticated])

//   const createProfilePic = (picture) => {
//     if(!document.getElementById("userPic")){
//       const img = new Image();
//       img.src = picture;
//       img.height = 50
//       img.width = 50
//       img.id = "userPic"
//       document.getElementsByTagName("header").appendChild(img);
//     }
//   }

    if (isLoading) {
        return <Loading />;
        }


  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        <div id="main-display">
          <Switch>
            <Route exact path="/" render={() => <LandingPage ></LandingPage>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default AppContainer;