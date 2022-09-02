import React from 'react'
import styled from "styled-components"

const Cell = ({details,updateFlag,revealCell}) => {
  return (
    <Container className={`${details.flagged?"okay":""}`} onContextMenu={(e)=>updateFlag(e,details.x,details.y)}  onClick={()=>revealCell(details.x,details.y)}>
        {details.revealed  && details.value}
    </Container>
  )
}

export default Cell;

const Container=styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid green;
    cursor:pointer;

    
`


