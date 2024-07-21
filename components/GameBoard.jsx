"use client";
import React, { useEffect, useState } from 'react';

const GameBoard = () => {
  const [next, setNext] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [start, setStart] = useState(false);

  const rows = 30, cols = 30;

  useEffect(() => {
    let grid = make2dArray(rows, cols);
    setNext(RandomZeroesAndOnes(grid));
  }, [rows, cols]);
  const make2dArray = (rows, cols) => {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(cols).fill(0);
    }
    return arr;
  }

  const RandomZeroesAndOnes = (TwoDArray) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        TwoDArray[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return TwoDArray;
  }
  const ChangeValue = (x, y) => {
    setNext(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      newGrid[x][y] = newGrid[x][y] === 1 ? 0 : 1;
      return newGrid;
    });
  }

  const CountNeighbours = (Array2D, rowIndex, colIndex) => {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let row = (rowIndex + i + rows) % rows;
        let col = (colIndex + j + cols) % cols;
        sum += Array2D[row][col];
      }
    }
    sum -= Array2D[rowIndex][colIndex];
    return sum;
  }

  const StartGame = () => {
    setStart(prev=>!prev);
    const draw = () => {
      setNext(prevGrid => {
        const newGrid = prevGrid.map(row => [...row]);
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            let state = prevGrid[i][j];
            let neighbours = CountNeighbours(prevGrid, i, j);
            if (state === 0 && neighbours === 3) {
              newGrid[i][j] = 1;
            } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
              newGrid[i][j] = 0;
            }
          }
        }
        return newGrid;
      });
    }

    if (intervalId) {
      clearInterval(intervalId);
    }
    let newIntervalId = setInterval(draw, 500);
    setIntervalId(newIntervalId);
  }
  const StopGame = () => {
    setStart(prev=>!prev);
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
  const ResetGame = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    let grid = make2dArray(rows, cols);
    setNext(RandomZeroesAndOnes(grid));
  }
  const ManualStart = () => {
    let grid = make2dArray(rows, cols);
    setNext(grid);
  }
  
  return (
    <div>
      <div className='flex flex-row flex-wrap mx-auto my-5 bg-[#e9ecef] bg-transparent'>
        {next.length > 0 && next.map((el, rowIndex) => {
          return el.map((gridval, colIndex) => {
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => ChangeValue(rowIndex, colIndex)}
                style={{ backgroundColor: `${gridval === 1 ? "#2E236C" : "#C8ACD6"}` }}
                className='border border-gray-600 min-h-[15px] w-[3.333%]'
              ></div>
            );
          });
        })}
      </div>
      <div className="utility-section">
        <p className=' text-center'>
          <button onClick={ManualStart} className='underline bg-transparent'>
            Want a Manual Start ?
          </button>
        </p>
        <div className='flex flex-row space-x-10 justify-center items-center'>
          {!start ? <button onClick={StartGame} className='my-5 p-2 text-2xl bg-blue-500 text-white font-bold'>Start</button>
            : <button onClick={StopGame} className='my-5 p-2 text-2xl bg-blue-500 text-white font-bold'>Stop</button>}
          <button onClick={ResetGame} className='my-5 p-2 text-2xl bg-blue-500 text-white font-bold'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
