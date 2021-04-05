

const PedalRating = (pedalRating) => {

    console.log(pedalRating.pedalRating);
    

    return(
        <input type="range" min="1" max="5" id="rating-slider" value={pedalRating.pedalRating} disabled/>
    )

}

export default PedalRating;