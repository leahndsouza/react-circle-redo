import React, { useState} from 'react';
import './App.css';

function App() {
  const [ pointLog, setPointLog ] = useState([])
  const [ poppedPoints, setPoppedPoints ] = useState([]);

  const clickHandler= (event) => {
    const newPoints = { xAxis: event.clientX - 10, yAxis: event.clientY -10 };
    setPointLog([...pointLog, newPoints]);

  }

  const undoHandler = () => {
    const points = [...pointLog];
    const popped = points.pop();
    if(!popped) return;
    setPoppedPoints([...poppedPoints,popped]);
    setPointLog(points)
  }

  const redoHandler = () => {
    const points = [...poppedPoints];
    const popped = points.pop();
    if(!popped) return;
    setPointLog([...pointLog,popped])
    setPoppedPoints(points);
  }

  return (
    <>
    <button disabled={pointLog.length == 0} onClick={undoHandler}>Undo</button>
    <button disabled={poppedPoints.length == 0} onClick={redoHandler}>Redo</button>
    <div className='App' onClick={(event) => clickHandler(event)}>
      {pointLog?.map((point) => 
       <div className='form-circle' style={{ 
        left: `${point.xAxis}`+'px',
        top: `${point.yAxis}`+'px'
       }}></div>
      )}
    </div>
    </>
  );
}

export default App;
