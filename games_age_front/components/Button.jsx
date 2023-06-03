import React from 'react'

const Button = ( { name } ) => {
  return (
    <button type='button' className='relative bg-primary-red text-white ml-2'>
      {name}
    </button>
  )
}

export default Button