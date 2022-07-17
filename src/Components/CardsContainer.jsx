import React from 'react'
import Card from './Card'

const cardsData = [{
    title: "Productos",
    data: 9999
  },
  {
    title: "Ventas",
    data: 9999
  },
  {
    title: "Usuarios",
    data: 9999
  },
  {
    title: "Ultimo Producto",
    data: "Producto"
  },
  {
    title: "Ultima Venta",
    data: "Venta"
  },
  {
    title: "Ultimo Usuario",
    data: "Usuario"
  }
  ]

const CardsContainer = () => {
  return (
    <>
        <div className="container-fluid">
           {cardsData.map (content => {
                return <Card title={content.title} data={content.data} />
            })}
        </div>
    </>
  )
}

export default CardsContainer