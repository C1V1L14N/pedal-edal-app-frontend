import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { DndProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
import NavBar from '../Components/nav-bar';
import Loading from '../Components/loading';
import Header from '../Components/Header';
import LandingPage from './LandingPageContainer';
import DetailsPage from './UserDetailsContainer';
import ProfileContainer from './ProfileContainer';
import PedalBoard from './PedalBoardContainer';
import '../Style/desktop.css';


const AppContainer = () => {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [saved, setSaved] = useState(false);
  const [allPedals, setAllPedals] = useState();
  const [allManufacturers, setAllManufacturers] = useState();
  const [input, setInput] = useState('');
  const [filteredPedalList, setFilteredPedalList] = useState();
  const [filteredManufacturerList, setFilteredManufacturerList] = useState();


  const getUserData = async () => {
    if (user){
      const { email, picture } = user;
      console.log("getting user data");
      console.log("NAME IS " + email)
      return await fetch(`http://localhost:8080/api/users?useremail=${email}`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .then(() => setUserLoggedIn(true))
      .then(() => createProfilePic(picture));
    }
  }

  const checkIfNewUser = () => {
    if (userData[0]) {
      console.log("existing user");
      setExistingUser(true);
    } else {
      console.log("saving new user");
      saveNewUser();
    }
  }

  const saveNewUser = async () => {
    if(user){
        const { email } = user;
        // const token = await getAccessTokenSilently();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `Bearer ${token}`
            },
            // data: {
            //     grant_type: 'client_credentials',
            //     client_id: 'h4QURbaQAF10gmmAwXE6fje3N4ZTchki',
            //     client_secret: 'bpXbKh0yAu5BD1UvcSZLxdmBsy8oa3y_dEE_w3X3aZEEwkDq6CH6-4sLmvDHAxV0',
            //     audience: 'http://localhost:8080/api'
            // },
            body: JSON.stringify({ 
                name: "",
                email: email,
                ageRange: "R_ONE",
                location: "",
                instrument: "",
                faveEffect: "",
                pedals: [],
                boards: []
                })
            };
            return await fetch('http://localhost:8080/api/users', requestOptions)
            .then(() => getUserData())
            .then(() => setNewUser(true))
        }
    }

    

  const createProfilePic = (picture) => {
    if(!document.getElementById("userPic")){
      const img = new Image();
      img.src = picture;
      img.height = 50
      img.width = 50
      img.id = "userPic"
      document.getElementById("header").appendChild(img);
    }
  }

  const getAllPedals = async () => {
    if (user){
      console.log("getting pedal data");
      return await fetch("http://localhost:8080/api/pedals")
      .then(res => res.json())
      .then(data => setAllPedals(data))
      .then(data => setFilteredPedalList(data))
    }
  }

  const getAllManufacturers = async () => {
    if (user){
      console.log("getting manufacturers data");
      return await fetch("http://localhost:8080/api/manufacturers")
      .then(res => res.json())
      .then(data => setAllManufacturers(data))
    }
  }

  const updateInput = async (input) => {
    const filtered = allPedals.filter(pedal => {
    return pedal.name.toLowerCase().includes(input.toLowerCase()) || pedal.description.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    if(input !== ""){
      setFilteredPedalList(filtered);
    }else{
      setFilteredPedalList(undefined);
    }
  }

  useEffect(() => {
    getUserData();
    getAllPedals();
    getAllManufacturers();
  }, [isAuthenticated === true])

  useEffect(() => {
    console.log("checking if new user")
    checkIfNewUser();
  }, [userLoggedIn === true])

  if (isLoading) {
      return <Loading />;
      }


  return (
    <div className="App">
      <Router>
        <Header userLoggedIn={userLoggedIn} input={input} setInput={setInput} filteredPedalList={filteredPedalList} onChange={updateInput} />
        <NavBar userLoggedIn={userLoggedIn}/>
        <div id="main-display">
          <Switch>
            <Route exact path="/" render={() => userData[0] ? <Redirect to= "/profile" /> :<LandingPage ></LandingPage>}/>
            <Route exact path="/profile" render={() => newUser === true ? <Redirect to= "/details" /> : <ProfileContainer userData={userData} getUserData={getUserData} setSaved={setSaved}></ProfileContainer>}/>
            <Route exact path="/details" render={() => saved === true ? <Redirect to ="/" /> : <DetailsPage setSaved={setSaved} userData={userData} getUserData={getUserData}/>}/>
            <Route exact path="/pedalboard" render={() => <PedalBoard userPedals={userData[0].pedals}/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default AppContainer;