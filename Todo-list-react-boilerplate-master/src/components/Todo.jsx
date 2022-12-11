import React, { useReducer, useState } from 'react'
import {EDIT,DELETE,ADD} from "./Action"
import TodoList from './TodoList'

function Todo() {
    const [todo,setTodo]=useState({value:"",order:""})
    const[isAdd,setIsAdd]=useState(true)
    const reducer=(state,action)=>{
        switch(action.type){
            case ADD:
                const updateData=[...state,{value:todo.value,order:state.length+1}] 
                setTodo({value:"",order:""})
                return updateData   
            case EDIT: 
                let update=[...state]
                if(isAdd){
                    setIsAdd(false)
                    setTodo(action.payload)
                }else{
                    update.forEach((st)=>{
                        if(st.order===todo.order){
                            st.value=todo.value
                        }
                    })
                    setIsAdd(true)
                    setTodo({value:"",order:""})

                }
                return update
            case DELETE:
                let newstate=state.filter((st)=>{
                     return st.order!==action.payload.order
                })
                return newstate
            default: 
                return state            
        }
    }
    const[state,dispatch]=useReducer(reducer,[])
    const handleChange=()=>{
        if(isAdd){
            dispatch({type:ADD})
        }else{
            dispatch({type:EDIT})
        }
    }
  return (  
    <div className='container'>
        <section className='todo'>
            <h3>TODO APP</h3> 
            <section className='todo-input'>
                <input onChange={(e)=>{setTodo({...todo,value:e.target.value})}} value={todo.value}/>
                <button onClick={()=>{handleChange()}}>{isAdd ?"ADD TODO":"Edit Todo"}</button>
            </section>
        </section>
        <TodoList listData={state} dispatch={dispatch}/>
    </div>
  )
}

export default Todo