import React from 'react'
import trash from "../assets/images/bucket-icon.svg"
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../redux/slices/todoSlice';
function Todos() {
  const { todo } = useSelector((state) => state);
  const dispatch = useDispatch();
    const handleRemove = (id) => {
      dispatch(removeTodo(id))
    }
    const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id))
    }
  return (
    <div className="main__todos">
      {
        todo.items.map((item) => {
          console.log(item.completed);
          return (
            <div className="main__todo" key={item.id}>
              <input onChange={() => handleToggleTodo(item.id)} checked={item.completed} type="checkbox" className="main__todo-checkbox"/>
              <span className={`main__todo-text ${item.completed ? "active" : ""}`}>{item.todo}</span>
              <button className="main__todo-btn" onClick={() => handleRemove(item.id)}>
                <img src={trash} alt="trash_icon" />
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todos;