import React from 'react'
import Card from './Card'
import {useState, useEffect} from 'react'

const cardsData = {
    productos: {total:"Productos", ultimo: "Ultimo Producto"},
    usuarios: {total: "Usuarios", ultimo:"Ultimo Usuario"},
    ventas: {total: "Ventas", ultimo: "Ultima Venta"}
  }

const CardsContainer = () => {

  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  useEffect (() => {
    //Fetch y Set de informacion de productos
    const fetchData = (async () => {    
      const res = await fetch ('http://localhost:3050/api/product')
      const data = await (res.json())
      return data
    })
    fetchData().then ((data) => {
      setProducts (data)
    })

  }, [])


  return (
    <>
    <div className="container-fluid">
    {
      products.length !== 0 &&
      <> 
      <Card  title={cardsData.productos.total} data={products.data.length}  />
      <Card  title={cardsData.productos.ultimo} data={products.data[products.data.length-1].nombre}  />
      </>
    }
    {
      products.length === 0 &&
      <h1>Cargando</h1>
    }
    </div>
    </>
  )
}

export default CardsContainer