import React from 'react';

const DetailsPage = (props) => {

    const handleClick = () => {

    }

    return (
        <div>
            <label name="name">Name:</label>
                <input type="text" name="name" required/>
            <label name="email">Email:</label>
                <input type="email" name="email" required/>
            <div id="age-range-radios">
                <p>Age Range:</p>
                    <label name="age-range" required>18-24</label>
                        <input type="radio" name="age-range" value="R_ONE"/>
                    <label name="age-range">25-34</label>
                        <input type="radio" name="age-range" value="R_TWO"/>
                    <label name="age-range">35-44</label>
                        <input type="radio" name="age-range" value="R_THREE"/>
                    <label name="age-range">45-54</label>
                        <input type="radio" name="age-range" value="R_FOUR"/>
                    <label name="age-range">55-64</label>
                        <input type="radio" name="age-range" value="R_FIVE"/>
                    <label name="age-range">65-74</label>
                        <input type="radio" name="age-range" value="R_SIX"/>
                    <label name="age-range">75+</label>
                        <input type="radio" name="age-range" value="R_SEVEN"/>
            </div>
            <label name="location">Location:</label>
                <input type="text" name="location"/>
            <label name="fave-instrument">Favourite Instrument:</label>
                <input type="text" name="fave-instrument"/>
            <div>
                <button onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default DetailsPage;