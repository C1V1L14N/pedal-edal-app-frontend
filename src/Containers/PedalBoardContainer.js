import React, { useCallback, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PedalBoardPedalArray from '../Components/pedalBoardPedalArray';
import '../Style/desktop.css';
import ImageList from '../Components/pedalBoardPedalArray';
// import { isTouchDevice } from "./utils";
// import TouchBackend from "react-dnd-touch-backend";
import update from "immutability-helper";
// import cuid from "cuid";

const PedalBoard = ({userPedals, images, setImages}) => {

    // const [images, setImages] = useState([]);


    // const makePedalImages = () => {

    //     let pedalImages = []

    //     userPedals.forEach(pedal => {
    //         pedalImages.push(pedal.image)
    //     });

    //     setImages(pedalImages);
    //     console.log(pedalImages[0]);
    // }

    // useEffect(() => {
    //     console.log("making pedal images")
    //     makePedalImages();
    // }, [])


    const moveImage = (dragIndex, hoverIndex) => {
        const draggedImage = images[dragIndex];
        setImages(
        update(images, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
        })
        );
    };



    return(
        <DndProvider backend={HTML5Backend}>
            <ImageList userPedals={userPedals} images={images} moveImage={moveImage}/>
        </DndProvider>
    )
}

export default PedalBoard;