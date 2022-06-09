import React from 'react'

export default function Pokemon(props) {

  
    
  return (
        <div>
            <p>HP{props.hp}</p>
        <img src={props.img} alt="" />
        <button onClick={props.handleClick}>Attack</button>
    </div>
  )
}
