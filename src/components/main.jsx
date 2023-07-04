import React, { useState } from 'react'
import logo from "../assets/images/todo-logo.svg"
import plus from "../assets/images/plus-icon.svg"
import Todos from './Todos';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
function Main() {
  const [value, setValue] = useState(null)
  const dispatch = useDispatch()
  const handleTodo = (e) => {
    setValue(e.target.value)
  }
  const handleClick = () => {
    dispatch(
      addTodo({id: Date.now(), todo:value, completed: false})
      );
    }
  return (
    <div className="main">
      <div className="main__row">
        <div className="main__logo">
          <img src={logo} alt="todo_icon" />
        </div>
        <div className="main__search">
          <div className="main__search-input">
            <input type="text" placeholder='Write something...' onChange={(e) => handleTodo(e)}/>
          </div>
          <button className="main__search-btn" onClick={() => handleClick()}>
            Add
            <img src={plus} alt="plus__icon" />
          </button>
        </div>
        <Todos/>
      </div>
    </div>
  )
}

export default Main;