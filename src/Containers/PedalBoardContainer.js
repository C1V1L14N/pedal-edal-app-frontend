import React, {useState} from 'react';
import '../Style/desktop.css';

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const PedalBoard = ({userPedals}) => {

    const [resized, setResized] = useState(false);
    const [userPedalsState, setUserPedalsState] = useState(userPedals)

    const makeToScale = (pedal) => {
        pedal.width = Math.round((pedal.width * 3.7795275591)/3)
        pedal.length = Math.round((pedal.length * 3.7795275591)/3)
        }

    function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(userPedalsState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUserPedalsState(items);
  }

    

        return(
            <div>
                <h2>Your Pedals:</h2>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable-pedal-list">
                    {(provided) => (
                        <div id="droppable-pedal-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {userPedalsState.map((pedal, index) => {
                                if(resized === false){
                                    console.log("width before", pedal.width);
                                    makeToScale(pedal)
                                    console.log("width after", pedal.width);
                                    setResized(true)
                                }
                                return (
                                    <Draggable key={pedal.id} draggableId={pedal.name} index={index}>
                                        {(provided) => (
                                                <div id="pedal-board-pedals-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <img src={process.env.PUBLIC_URL + pedal.image} height={pedal.length} width={pedal.width} />
                                                </div>
                                            )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </DragDropContext>
                <DragDropContext>
                <Droppable droppableId="pedal-board-itself">
                    {(provided) => (
                        <div id="pedal-board-itself" {...provided.droppableProps} ref={provided.innerRef}>
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            
            </div>
            
                    
        )

}

export default PedalBoard;