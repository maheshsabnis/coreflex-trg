import { useState } from 'react';
import './App.css';

function App() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [z,setZ] = useState(0);

  /* Logic Methods */

  const clear=()=>{
    setX(0);
    setY(0);
    setZ(0);
  };
  const add =()=>{
    setZ(x + y);
  };

  return (
    <div className="App">
        X: <input type='text' value={x} onChange={(evt)=>setX(parseFloat(evt.target.value))}/>
        <br/>
        Y: <input type='text' value={y} onChange={(evt)=>setY(parseFloat(evt.target.value))}/>
        <br/>
        Z: <input type='text' value={z} readOnly/>
        <br/>
        <div>
          {/* Bind methods to Element's Event */}
           <button onClick={clear}>Clear</button>
           <button onClick={add}>Add</button>
        </div>
    </div>
  );
}

export default App;
