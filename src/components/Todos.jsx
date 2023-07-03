import React from 'react'
import trash from "../assets/images/bucket-icon.svg"
function Todos() {
  return (
    <div className="main__todos">
      <div className="main__todo">
        <input type="checkbox" className="main__todo-checkbox"/>
        <span className="main__todo-text">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
        <button className="main__todo-btn">
          <img src={trash} alt="trash_icon" />
        </button>
      </div>
    </div>
  )
}

export default Todos;