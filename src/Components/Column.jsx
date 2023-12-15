//  DROPPABLE COMPONENT
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import  './CSS/scroll.css';

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 300px;
    padding: 8px;
    height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    border: 1px solid pink;
    `;
    
    const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
    `;
    
    const TaskList = styled.div`
    padding:3px;
    transistion: background-color 0.2s ease;
    background-color: #f4fsf7;
    flex-grow: 1;
    min-height: 100px;
    `;



const Column = ({title,task,id}) => {

    
  return (
    <>
        <Container className='column'>
            <Title
            style={{backgroundColor:'lightblue',
                    position:'sticky',
                  }}
            >
                {title}
            </Title>

            <Droppable droppableId={id}>
                {(provided,snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    issDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* {task} */}
                        {provided.placeholder}
                    </TaskList>
                )}

            </Droppable>



            </Container>
             
    </>
  );
};

export default Column