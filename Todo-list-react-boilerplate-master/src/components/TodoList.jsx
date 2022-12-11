import React from 'react'
import {EDIT,DELETE} from "./Action"

function TodoList({listData,dispatch}) {
  return (
    <div>
        {
          listData.map((todo,i)=>{
            return <>
                <section key={`${todo.value}-${i}`}>
                    <article>{todo.value}</article>
                        <article>
                            <button onClick={()=>{dispatch({type:EDIT, payload:todo})}}>Edit</button>
                            <button onClick={()=>{dispatch({type:DELETE, payload:todo})}}>Delete </button>
                        </article>
                </section>
            </>
          })
        }
    </div>
  )
}

export default TodoList