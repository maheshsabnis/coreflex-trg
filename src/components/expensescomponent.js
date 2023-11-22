import React, { useState } from 'react'

import { ExpensesHeads, ExpensesSubHeads } from '../constants/dataconstants';

import SelectComponent from '../reusablecomponents/selectcomponent';

const ExpensesComponent = () => {
//   const [heads, setHeads] = useState([
//      'Food', 'Movie', 'Fuel', 'Misc.'
//   ]);
//   const [subheads, setSubHeads] = useState([
//     'Hotel-Food', 'Vegitables', 'Milk', 'Theator', 'OTT', 'Petorl', 'Gas', 'Puncture', 'Repair'
//     ]);


  const [heads, setHeads] = useState(ExpensesHeads);
  const [subheads, setSubHeads] = useState(ExpensesSubHeads);
 
    const [expHead,setExpHead] = useState('');
    const [expSubHead,setSubExpHead] = useState('');
 
  return (
    <div className='container'>
       <div className='form-group'>
           <label>Select Expenses Head</label> 
           <SelectComponent dataSource={heads}
            bindableProperty={expHead}
            selectedValue={(val)=>setExpHead(val)}
            />
           {/* <select className='form-control'
           value={expHead}
             onChange={(evt)=>setExpHead(evt.target.value)}>
              <option>Select Expense Head</option> 
              {
                heads.map((h,idx)=>(
                    <option key={idx} value={h}>{h}</option>
                ))
              }
           </select>  */}
           <hr/>
           <strong>
            Selected Head : {expHead}
           </strong>
       </div>
       <div className='form-group'>
           <label>Select Expenses Sub Head</label> 
           <SelectComponent dataSource={subheads}
           bindableProperty={expSubHead}
           selectedValue={(val)=>setSubExpHead(val)}
           />
           {/* <select className='form-control'
            value={expSubHead}
            onChange={(evt)=>setSubExpHead(evt.target.value)}    

           >
              <option>Select Sub Expense Head</option> 
              {
                subheads.map((h,idx)=>(
                    <option key={idx} value={h}>{h}</option>
                ))
              }
           </select>  */}
           <hr/>
           <strong>
            Selected Sub Head : {expSubHead}
           </strong>
       </div>
    </div>
  )
}

export default ExpensesComponent
