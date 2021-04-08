import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const About = () => {

    return(
        <Link to="/about" id="about-container">
            <h2>About Pedal-edal</h2>
            <p>Some stuff about us and the site</p>
        </Link>
    )

}

export default About;