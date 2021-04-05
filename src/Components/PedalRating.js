import '../Style/pedal-rating.css'

const PedalRating = (pedalRating) => {
    
    return(
        <input name="rating" type="range" min="1" max="5" id="rating-slider" value={pedalRating.pedalRating} disabled/>
    )

}

export default PedalRating;