import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createBoard } from '../utils/createBoard';
import { revealed } from '../utils/reveal';
import Cell from './Cell';


const Board = () => {
    const [grid,setGrid]=useState([])

    useEffect(()=>{
        const freshBoard=()=>{
            const newBoard=createBoard(10,10,20);
            setGrid(newBoard.board);
            console.log(grid)
        }
        freshBoard();
    },[])

    // on Right Click / flag a cell
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        let newGrid=JSON.parse(JSON.stringify(grid));
        
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
       
        setGrid(newGrid);
        console.log(newGrid)
        console.log(grid);
    }

    // on Left Click / Reveal cell

    const revealCell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X") {
            alert("There is a bomb")
        }else{
           const revealedGrid=revealed(newGrid,x,y);
        setGrid(revealedGrid);
        }
        
    }



    if(!grid) {
        return <div>Loading...</div>
    }
  return (
    <div>
        {grid.map((row,index)=>{
            return <div key={index} style={{display:"flex"}}>
                {row.map((item,index2)=>{
                    return <Cell updateFlag={updateFlag} revealCell={revealCell} key={index2} details={item}/>
                })}
            </div>
        })}
    </div>
  )
}

export default Board;



