import React from 'react'
import Card from './Card'
import {useState, useEffect} from 'react'

const cardsData = {
    productos: {total:"Productos", ultimo: "Ultimo Producto Creado"},
    usuarios: {total: "Usuarios", ultimo:"Ultimo Usuario Creado"},
    ventas: {total: "Ventas", ultimo: "Ultima Venta"}
  }

const CardsContainer = () => {

  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [sales, setSales] = useState([])


  useEffect (() => {
    //Fetch y Set de informacion de productos
    const fetchProductData = (async () => {    
      const res = await fetch ('http://localhost:3050/api/product')
      const data = await (res.json())
      return data
    })
    fetchProductData().then ((data) => {
      setProducts (data)
    })

    //Fetch y Set de informacion de usuarios
    const fetchUserData = (async () => {    
      const res = await fetch ('http://localhost:3050/api/users')
      const data = await (res.json())
      return data
    })
    fetchUserData().then ((data) => {
      setUsers (data)
    })
    //Fetch y Set de informacion de transacciones
   const fetchSales = (async () => {    
      const res = await fetch ('http://localhost:3050/api/sales')
      const data = await (res.json())
      return data
    })
    fetchSales().then ((data) => {
      setSales (data)
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


        {
      users.length !== 0 &&
      <> 
      <Card  title={cardsData.usuarios.total} data={users.users.length}  />
      <Card  title={cardsData.usuarios.ultimo} data={users.users[users.users.length-1].email}  />
      </>
    }
    {
      users.length === 0 &&
      <h1>Cargando</h1>
    }


    {
      sales.length !== 0 &&
      <> 
      <Card  title={cardsData.ventas.total} data={sales.data.length}  />
      </>
    }
    {
      users.length === 0 &&
      <h1>Cargando</h1>
    }
    </div>
    </>
  )
}

export default CardsContainer