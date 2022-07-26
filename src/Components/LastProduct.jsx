import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LastProduct = () => {
    const [lastUser, setLastUser] = useState()

    useEffect (() => {
      //Fetch y Set de informacion de ultimo usuario
      const fetchData = (async () => {    
        const res = await fetch ('http://localhost:3050/api/users')
        const data = await (res.json())
        return data
      })
     fetchData().then (async (data) => {
        const res = await fetch (`http://localhost:3050/api/users/${data.users.length}`)
        const userData = await (res.json())
        return userData
      }).then (userData => setLastUser (userData))
      
    }, [])

    useEffect(() => {
        console.log(lastUser)
    }, [lastUser])

  return (
    <>
    <div class="container-fluid">
    <div className="card last-card">
    <img className="card-img-top" src={lastUser && 
    `http://localhost:3050/img/users/${lastUser.usuario.imagen}`
    } alt="Perfil de usuario"/>
    <div className="card-body">
    <h5 className="card-title">
        Último Usuario Creado
    </h5>
    {lastUser &&
    <ul>
        <li>ID: {lastUser.usuario.usuario_id} </li>
        <li>Nombre: {lastUser.usuario.nombre} </li>
        <li>Apellido: {lastUser.usuario.apellido} </li>
        <li>Email: {lastUser.usuario.email} </li>
    </ul>
}
    <Link to="/" className="btn btn-primary last-button">Volver</Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default LastProduct