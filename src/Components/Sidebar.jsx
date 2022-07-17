import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="logo-div">
      <a href="#"><img className="logo" src="digitalwines-transparent.png" /></a>
    </div>
    <nav>
      <ul className="navbar-list">
        <a href="#"><li className="navbar-item">Home</li></a>
        <a href="#"><li className="navbar-item">Productos</li></a>
        <a href="#"><li className="navbar-item">Usuarios</li></a>
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar