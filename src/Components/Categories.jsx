import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const [productsCategories, setProductsCategories] = useState()
    const categoriesCounter = {
        icono: 0,
        gran_reserva: 0,
        reserva: 0,
        entry_level: 0
    }
    useEffect (() => {
      //Fetch y Set de informacion de Categorias
      const fetchData = (async () => {    
        const res = await fetch ('http://localhost:3050/api/product')
        const data = await (res.json())
        return data
      })
     fetchData().then (async (data) => {
        const productData = data.data
        console.log(productData)
        for (let i = 0; i<productData.length; i++){
            switch (productData[i].categoria) {
                case "icono":
                    categoriesCounter.icono += 1
                    break
                case "gran-reserva":
                    categoriesCounter.gran_reserva +=1
                    break
                case "reserva":
                    categoriesCounter.reserva +=1
                    break
                case "entry-level":
                    categoriesCounter.entry_level +=1
                    break
            }
        }
        setProductsCategories (categoriesCounter)
      })
    }, [])

    useEffect(() => {
        console.log(productsCategories)
    }, [productsCategories])

  return (
    <>
    <div className="container-fluid categories-div">
    <h1 className="categories-h1">Productos por categoría</h1>
    <table className="table">
  <thead className="thead">
    <tr>
      <th scope="col">Categoría</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ícono</th>
      <td>{productsCategories &&
      productsCategories.icono
      }</td>
    </tr>
    <tr>
      <th scope="row">Gran Reserva</th>
      <td>{productsCategories &&
      productsCategories.gran_reserva
      }</td>
    </tr>
    <tr>
      <th scope="row">Reserva</th>
      <td>{productsCategories &&
      productsCategories.reserva
      }</td>
    </tr>
    <tr>
      <th scope="row">Entry Level</th>
      <td>{productsCategories &&
      productsCategories.entry_level
      }</td>
    </tr>
  </tbody>
</table>
<Link to="/" className="btn btn-primary last-button">Volver</Link>

</div>
    </>
  )
}

export default Categories