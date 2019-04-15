import React from 'react'

const DisplayCharacter = ({ image, name, id }) => {
  return (
        <div key={id}>
            <img src={image} alt={name} className="conso-image" />
        </div>
  )
}

export default DisplayCharacter

