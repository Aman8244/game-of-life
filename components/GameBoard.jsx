import React from 'react'

const GameBoard = () => {
  const make2dArray = (rows,cols)=>{
      let arr = new Array(rows);
      for(let i = 0;i<rows;i++){
        arr[i] = new Array(cols);
      }
      return arr
  }
  const RandomZeroesAndOnes = (TwoDArray)=>{
      for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            TwoDArray[i][j] = Math.floor(Math.random()*2);
        }
      }
      return TwoDArray;
  }
  let rows = 30,cols = 30;
  let grid = make2dArray(rows,cols);
  let next = RandomZeroesAndOnes(grid);
  console.table(next);

  return (
    <div>
      <div className='flex flex-row flex-wrap'>
          {next? next.map((el)=>{
              return el.map((gridval)=>{
                return <div style={{backgroundColor:`${(gridval===1)?"blue":"black"}`}}  className='border border-white min-h-[15px] w-[3.3%]'>{}</div>
              })
          }):<></>}
      </div>
      
    </div>
  )
}

export default GameBoard