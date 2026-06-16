import React from 'react'
import { NavLink, Link } from 'react-router'


function NavBar() {
  return (
  <div className='flex justify-between px-6 py-4 sticky border-b border-gray-200 tracking-tight'>
  <Link to={'/'} className='text-xl font-bold'>Rick & Morty</Link>
  <div className='flex items-center gap-6'>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `font-medium transition-colors hover:text-black ${isActive ? 'text-green-500' : 'text-gray-700'}`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/characters"
      className={({ isActive }) =>
        `font-medium transition-colors hover:text-black ${isActive ? 'text-green-500' : 'text-gray-700'}`
      }
    >
      Characters
    </NavLink>
  </div>
</div>
  )
}

export default NavBar