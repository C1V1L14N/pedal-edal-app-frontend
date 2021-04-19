import React from 'react';
import '../Style/desktop.css';

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const PedalBoard = ({userPedals}) => {

    const makeToScale = (pedal) => {
        pedal.width = Math.round((pedal.width * 3.7795275591)/3)
        pedal.length = Math.round((pedal.length * 3.7795275591)/3)
        }

    

        return(
            <div>
                <h2>Your Pedals:</h2>
            <DragDropContext>
                <Droppable droppableId="droppable-pedal-list">
                    {(provided) => (
                        <ul id="droppable-pedal-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {userPedals.map((pedal, index) => {
                                console.log("width before", pedal.width);
                                makeToScale(pedal)
                                console.log("width after", pedal.width);
                                return (
                                    <Draggable key={pedal.id} draggableId={pedal.name} index={index}>
                                        {(provided) => (
                                                <li id="pedal-board-pedals-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <img src={process.env.PUBLIC_URL + pedal.image} height={pedal.length} width={pedal.width} />
                                                </li>
                                            )}
                                    </Draggable>
                                );
                            })}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            </div>
                    
        )

}

export default PedalBoard;