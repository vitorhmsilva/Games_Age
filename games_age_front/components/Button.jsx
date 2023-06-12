import Link from 'next/link'
import React from 'react'

const Button = ({ name }) => {
  return (
    <button type='button' className='relative bg-transparent text-white h-16 rounded-xl border w-80'>
      {name}
    </button>
  )
}

export default Button