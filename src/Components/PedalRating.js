

const PedalRating = (pedal) => {

    return(
        <input type="range" min="1" max="5" id="rating-slider" value={pedal.pedalRating} disabled/>
    )

}

export default PedalRating;