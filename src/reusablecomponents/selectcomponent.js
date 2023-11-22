import React from 'react'

const SelectComponent = (props) => {
    /* dataSource: is the data received from parent */

    /* Add a function that will be bound to default event for the HTML Element e.g. 'onChange' for select that will be used to emit data to parent */

    const handleChange=(evt)=>{
        props.selectedValue(evt.target.value);
    };

   if(props.dataSource === undefined || props.dataSource.length === 0){
    return (
        <div className='alert alert-danger'>
            No Data To Show
        </div>
    );
   }
/* bindableProperty: Use the baindable property that will be changed from child to parent*/
   return (
     <div className='form-group'>
         <select className='form-control'
           value={props.bindableProperty}
           onChange={handleChange}
           >
             <option>Select Data</option>
             {
                props.dataSource.map((d,idx)=>(
                    <option key={idx} value={d}>{d}</option>
                ))
             }
         </select>
     </div>
   );
}

export default SelectComponent;
