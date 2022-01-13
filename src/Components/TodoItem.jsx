import React from 'react'
import './TodoItem.css'
const TodoItem = ({name, done, id}) => {
    debugger
    return (
        <div className='todoitem'>
            <p className={done && "todoItem--item"}>{name}</p>
        </div>
    )
}

export default TodoItem
