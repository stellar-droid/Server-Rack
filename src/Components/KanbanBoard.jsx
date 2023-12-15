// DRAG DROP CONTEXT
import React from 'react'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column';
const KanbanBoard = () => {
const [completed, setCompleted] = useState([]);
const [incompleted, setIncompleted] = useState([]);

  return (
         
    <DragDropContext>
    <h2 style={{textAlign:'center'}}>Progress Board</h2>

        <div style={ { display: 'flex', justifyContent: 'space-around', alignItems:'center' , flexDirection:'row' } }>
            <Column title="To Do" task={incompleted} id={"1"} />

        </div>


    </DragDropContext>
  );
};

export default KanbanBoard;