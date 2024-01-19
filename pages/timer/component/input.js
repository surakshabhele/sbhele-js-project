import React from 'react'

function Input({name,ret}) {
  return (
    <div className='time-input'>
        <div className='start'>{ret}</div>
        <span className='time-text'>{name}</span>
    </div>
  )
}

export default Input