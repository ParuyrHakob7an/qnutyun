import React from 'react'

function HeaderComp({title,imageUrl}) {
  return (
    <div>
        <p>{title}</p>
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default HeaderComp