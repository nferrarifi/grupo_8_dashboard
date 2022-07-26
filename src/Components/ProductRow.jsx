import React from 'react'

const ProductRow = (props) => {
  return (
    <>
      <tr>
        <th scope="row">{props.nombre}</th>
        <th scope="row">{props.categoria}</th>
        <th scope="row">${props.precio}</th>
      </tr>
    </>
  )
}

export default ProductRow