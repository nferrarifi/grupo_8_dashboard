import React from 'react'

const Card = (props) => {
  return (
    <>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{props.data}</h5>
              </div>
            </div> 
    </>
  )
}

export default Card