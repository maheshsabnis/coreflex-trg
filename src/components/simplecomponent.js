import React, {useState} from "react";

/* Use 'props' to read data passed from the parent */
const SimpleComponent =(props)=>{ 
  /* Let's Define the state  */
  /*
      const [stateProperty, action-Callback-To-Update-The-StateProperty] = useState(initialValue-of-StateProperty);  
  */
  const [name,setName] = useState('');
  return (
    <div>
        <h1>The Simple Component</h1>
        <div>
          <strong>
             Data Received from Parent : {props.message}
          </strong>
        </div>
        {/* Bind the State Property to HTML input element and make sure that the event callback is set to update the state property
        onChange={(evt)=>setName(evt.target.value)}
        1. onChange: An Event for Interactivity
        2. evt: the EventArgument Parameter for HTML element's event
        3. evt.target: the HTML element on which an event is fired
        4. evt.target.value: the value entered / retiurned by the HTML Elements
        */}
        <input type='text' value={name}
          onChange={(evt)=>setName(evt.target.value)}/>
        <hr/>
        <MyFirstChildComponent name={name}/>
    </div>
  );
};

function MyFirstChildComponent(props){
  return (
    <div>
       <h2>The First Child Component</h2>
       <div>
         <strong>
            Data Received from SimpleComponent : {props.name}
         </strong>
       </div> 
    </div>
  );
}



/* Export the Component */

export default SimpleComponent;