import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import CardsContainer from './CardsContainer';
import LastProduct from './LastProduct';
import Categories from './Categories';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
    <div className="logo-div">
      <Link to="/"><img className="logo" src="digitalwines-transparent.png" /></Link>
    </div>
    <nav>
      <ul className="navbar-list">
        <Link to="/"><li className="navbar-item">Home</li></Link>
        <Link to="lastUser"><li className="navbar-item">Último usuario Creado</li></Link>
        <Link to="categories"><li className="navbar-item">Productos por Categoría</li></Link>
      </ul>
    </nav>
  </div>

    <Routes>
      <Route path="lastUser" element={<LastProduct />} />
      <Route path="/" element={<CardsContainer />} />
      <Route path="categories" element={<Categories />}/>
    </Routes>
    </>
  )

}

export default Sidebar