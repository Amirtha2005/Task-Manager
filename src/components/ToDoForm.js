import React, { useState } from 'react'

export default function ToDoForm({filter}) {

    const[todos,setTodos]=useState([]); //array of todos
    const[value,setValue]=useState(""); // input new todo


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value.trim() !==""){
            setTodos([...todos,{text: value.trim(), checked: false}]);
            setValue("");
        }
    }
    
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleToggleTodo=(index)=>{
        const value=[...todos];
        value[index].checked=!value[index].checked;
        setTodos(value);
    }
    // const handleToggleTodo = (index) => {
    //     const updatedTodos = [...todos];
    //     updatedTodos[index].checked = !updatedTodos[index].checked;
    //     setTodos(updatedTodos);
    //   };
   
      const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      };

    // const handleDeleteTodo=(index)=>{
    //     const value=[...todos];
    //     value.splice(index,1);
    //     setTodos(value);
    // }
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') {
          return todo.checked;
        } else if (filter === 'uncompleted') {
          return !todo.checked;
        } else {
          return true; // 'all' option or default
        }
      });

  return (
    <div className='overall'>

    <div className='div1'>
       <form className='ToDoForm'>
        <input type='text' 
        value={value}
        className='todo-input' 
        placeholder='enter your task' 
        onChange={handleChange}/>

        <button type='submit' className='todo-btn' onClick={handleSubmit}>Add Task</button>
       </form>

       <ul>
        {filteredTodos.map((todo, index)=>(

            <li key={index} style={{display: "flex"}}>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <input type='checkbox'
                    checked={todo.checked}
                    onChange={()=>handleToggleTodo(index)}
                    className='todo-checkbox'
                    />

                    <span style={{ marginRight: "10px",
                             textDecoration: todo.checked ? "line-through" : "none",
                        }}>
                    {todo.text}
                    </span>
                </div>

                <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)} >
              Delete
            </button>

            </li>
        ))}
       </ul>

    </div>

   

    </div>
  )
}
