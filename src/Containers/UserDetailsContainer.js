import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Loading from '../Components/loading'

const DetailsPage = ({userData, setUserData, getUserData, userLoggedIn}) => {

    const AGE_RANGE = ["R_ONE", "R_TWO", "R_THREE", "R_FOUR", "R_FIVE", "R_SIX", "R_SEVEN"];

    const initialValues = () => {
        if (userData[0].name !== ""){
            return {
            name: userData[0].name,
            email: userData[0].email,
            ageRange: userData[0].ageRange,
            location: userData[0].location,
            instrument: userData[0].instrument
        } 
        }else{
            return { 
            name: "",
            email: userData[0].email,
            ageRange: "",
            location: "",
            instrument: ""
            };

            }
        }
    


    const [formData, setFormData] = useState(initialValues());
    

    const handleChange = (event) => {
    const newState = {...formData};
    // const newUserState = [userData[0]];
    newState[event.target.name] = event.target.value;
    let userDataToChange = event.target.name
    console.log(userDataToChange);
    // setUserData({userDataToChange: event.target.value})
    // setUserData((userData[0]) => ({ ...userData[0], userDataToChange: event.target.value }));
    console.log(userData[0].ageRange);
    console.log(event.target.value);
    setFormData(newState);
    // setUserData([newUserState])
    }
    // .bind

    const saveUser = async () => {
    
        // const token = await getAccessTokenSilently();

        const requestOptions = {
            method: 'PUT',
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
                id: userData[0].id, 
                name: formData.name,
                email: formData.email,
                ageRange: formData.ageRange,
                location: formData.location,
                instrument: formData.instrument,
                faveEffect: "",
                pedals: [],
                boards: []
                })
            };
            return await fetch(`http://localhost:8080/api/users/${userData[0].id}`, requestOptions)
            // .then(() => getUserData())
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveUser(formData);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label name="name">Name:</label>
                    <input type="text" name="name" defaultValue={userData[0].name} onChange={handleChange} required/>
                <label name="email">Email:</label>
                    <input type="email" name="email" defaultValue={userData[0].email} onChange={handleChange} disabled required/>
                <div id="age-range-radios">
                    <p>Age Range:</p>
                        {/* {AGE_RANGE.map(ageRange => (
                            <>
                                <label className="age-ranges">{ageRange}</label>
                                    <input
                                        checked={userData[0].ageRange === ageRange}
                                        type="radio"
                                        name="ageRange"
                                        value={ageRange}
                                        required="required"
                                        onChange={handleChange}
                                    ></input>
                                </>
                        ))} */}
                        <label name="ageRange">18-24</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_ONE" checked={formData.ageRange === "R_ONE"} required/>
                        <label name="ageRange">25-34</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_TWO" checked={formData.ageRange === "R_TWO"} />
                        <label name="ageRange">35-44</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_THREE" checked={formData.ageRange === "R_THREE"} />
                        <label name="ageRange">45-54</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_FOUR" checked={formData.ageRange === "R_FOUR"} />
                        <label name="ageRange">55-64</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_FIVE" checked={formData.ageRange === "R_FIVE"} />
                        <label name="ageRange">65-74</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_SIX" checked={formData.ageRange === "R_SIX"} />
                        <label name="ageRange">75+</label>
                            <input type="radio" name="ageRange" onChange={handleChange} value="R_SEVEN" checked={formData.ageRange === "R_SEVEN"} />
                </div>
                <label name="location">Location:</label>
                    <input type="text" name="location" defaultValue={userData[0].location} onChange={handleChange}/>
                <label name="fave-instrument">Favourite Instrument:</label>
                    <input type="text" name="instrument" defaultValue={userData[0].instrument} onChange={handleChange}/>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default DetailsPage;