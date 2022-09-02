export const createBoard = (row, col, bombs) => {
  let board = [];
  let mineLocation = [];


//   creating a board

  for (let x = 0; x < row; x++) {
    let subArray = [];
    for (let y = 0; y < col; y++) {
      subArray.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      })
    }
    board.push(subArray);
  }

  let bombCount = 0;


//   randomizing the bomb placement

  while(bombCount<bombs) {
      let x=Math.floor(Math.random()*row);
      let y=Math.floor(Math.random()*col);

      if(board[x][y].value===0) {
          board[x][y].value='X';
          mineLocation.push([x,y])
          bombCount++;
      }
  }

//   add nums

  for(let roww=0;roww<row;roww++) {
      for(let coll=0;coll<col;coll++) {
          if(board[roww][coll].value==="X") {
              continue;
          }

        //   top

          if(roww>0 && board[roww-1][coll].value==="X") {
              board[roww][coll].value++;
          }

        //   top right

          if(roww>0 && coll<col-1 && board[roww-1][coll+1].value==="X") {
              board[roww][coll].value++;
          }

        //   right

          if(coll<col-1 && board[roww][coll+1].value==="X") {
            board[roww][coll].value++;
          }

        //   bottom right

        if(roww<row-1&& coll<col-1 && board[roww+1][coll+1]==="X") {
            board[roww][coll].value++;
        }

        // bottom

        if(roww<row-1 && board[roww+1][coll].value==="X") {
            board[roww][coll].value++;
        }

        // bottom left

        if(roww<row-1 && coll>0 && board[roww+1][coll-1].value==="X") {
            board[roww][coll].value++;
        }

        // left

        if(coll>0 && board[roww][coll-1].value==="X") {
            board[roww][coll].value++;
        }
        
        // Top left

        if(roww>0&& coll>0 && board[roww-1][coll-1].value==="X") {
            board[roww][coll].value++;
        }  
      }
  }

  return {board,mineLocation};
};


