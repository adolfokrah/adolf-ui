import React from 'react'
import './tailwind.css'

export const RButton = ({ children, onClick }) => {
  return (
    <button className='p-2 bg-gray-700 text-white rounded-md' onClick={onClick}>
      {children}
    </button>
  )
}
