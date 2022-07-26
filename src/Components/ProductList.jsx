import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductRow from './ProductRow'

const ProductList = () => {

  const [products, setProducts] = useState()

  useEffect (() => {
    //Fetch y Set de informacion de todos los Productos
    const fetchData = (async () => {    
      const res = await fetch ('http://localhost:3050/api/product')
      const data = await (res.json())
      return data
    })
   fetchData().then (async (data) => {
      const productData = data.data
      console.log(productData)
      setProducts (productData)
    })
  }, [])

  return (
    <>
        <div className="container-fluid categories-div">
    <h1 className="categories-h1">Lista de productos</h1>
    <table className="table">
  <thead className="thead">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Categoría</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    {
      products &&
      products.map((product, index) => {
      return <ProductRow key={index} nombre={product.nombre} categoria={product.categoria} precio={product.precio} />
      })
    }
  </tbody>
</table>
<Link to="/" className="btn btn-primary last-button">Volver</Link>

</div>
    </>
  )
}

export default ProductList