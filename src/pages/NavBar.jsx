import React from 'react'
import { Link } from 'react-router'


function NavBar() {
  return (
    <div className='flex justify-between bg-white text-black p-4 sticky border-b border-grey-400 '>
      <h2>Rick&Morty</h2>
        <div className='flex item-center gap-4 '>
        <Link to={"/"} className='hover:text-gray-200'>
        Home</Link>
        <Link to={"/characters"}  className='hover:text-gray-200'>
        Characters</Link>
        
        </div>
    
    </div>
  )
}

export default NavBar