import React from 'react';
import LoginButton from '../Components/login-button';
import SignupButton from '../Components/signup-button';
import '../Style/desktop.css';

const LandingPage = () => {

    return (
        <div id="landing-page">
            <LoginButton></LoginButton>
            <br/>
            <SignupButton></SignupButton>
        </div>
    )
}

export default LandingPage;