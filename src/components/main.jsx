import React from 'react'
import logo from "../assets/images/todo-logo.svg"
import plus from "../assets/images/plus-icon.svg"
import Todos from './Todos';
function Main() {
  return (
    <div className="main">
      <div className="main__row">
        <div className="main__logo">
          <img src={logo} alt="todo_icon" />
        </div>
        <div className="main__search">
          <div className="main__search-input">
            <input type="text" placeholder='Write something...'/>
          </div>
          <button className="main__search-btn">
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