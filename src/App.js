import React, { useState} from 'react';
import './App.css';

function App() {
  const [ pointLog, setPointLog ] = useState([])
  const [ poppedPoints, setPoppedPoints ] = useState([]);

  const clickHandler= (event) => {
    const newPosition = { xAxis: event.clientX - 10, yAxis: event.clientY -10 };
    setPointLog([...pointLog, newPosition]);

  }

  console.log(pointLog);

  return (
    <div className='App' onClick={(event) => clickHandler(event)}>
      {pointLog?.map((point) => 
       <div className='form-circle' style={{ 
        left: `${point.xAxis}`+'px',
        top: `${point.yAxis}`+'px'
       }}></div>
      )}
    </div>
  );
}

export default App;
