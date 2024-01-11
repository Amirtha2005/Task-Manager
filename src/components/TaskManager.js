import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import Calendar from 'react-calendar';

export default function TaskManager() {

    const[filter,setFilter]=useState('all');
    const [dropdown, setDropdown] = useState(false);

    const handleFilterChange = (selectedFilter) => {
      setFilter(selectedFilter);
      setDropdown(!dropdown);
    };


  return (
    <div>
        <div className='todo-nav'>
            <div className="heading" style={{color:"white" }}>
                <h1>Manage Your Task</h1>
            </div>
        <div className='filter-dropdown' >
       
            <button onClick={()=> setDropdown(!dropdown)}>FILTER</button>

            {dropdown && (
                <div className='filter-options'>
                    <button onClick={()=> handleFilterChange('all')}>All</button>
                    <button onClick={()=> handleFilterChange('completed')}>Completed</button>
                    <button onClick={()=> handleFilterChange('uncompleted')}>Uncompleted</button>

                </div>
            )}
        </div>
        </div>
    <div className='taskManager'>
        
      <div className='taskdiv'>
      
        <h1>IMPORTANT TASK</h1>
        <ToDoForm filter={filter} />
      </div>

      <div className='taskdiv'>
        <h1>DOING</h1>
        <ToDoForm filter={filter}/>
      </div>

      <div className='taskdiv'>
        <h1>TO REVIEW</h1>
        <ToDoForm filter={filter}/>
       
      </div>

    </div>

    <div className='calendar'>
        <Calendar/>
    </div>

    </div>
  )
}
