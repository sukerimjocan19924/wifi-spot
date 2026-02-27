import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3'>
            <h1 className='flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center bg-slate-900 text-white rounded-xl'>Wi</div>
                <div>
                    <div className='text-base font-semibold'>Wifi Spot</div>
                    <div className='text-xs text-slate-500'>Public Wifi Map</div>
                </div>
            </h1>

            <nav>
                <NavLink to="/map">Map</NavLink>
                <NavLink to="/favorites">favorites</NavLink>
                <NavLink to="/about">about</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header