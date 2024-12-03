import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } 

    
    return () => clearInterval(timer);
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={startCounter} disabled={isRunning}>Start</button>
      <button onClick={stopCounter} disabled={!isRunning}>Stop</button>
    </div>
  );
};

export default App;