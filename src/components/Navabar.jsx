import React, { useState } from 'react'
import menuIconInner from '../assets/menu-icon-inner.svg'
import menuIconOuter from '../assets/menu-icon-outer.svg'

export const Navabar = () => {
  const navLinks = [
    {'title':'Home', 'link':''},
    {'title':'Works', 'link':''},
    {'title':'About', 'link':''},
    {'title':'Process', 'link':''},
    {'title':'Playground', 'link':''},
  ]
  const [expendMenu,setexpendMenu] = useState(false)
  return (
    <header className='max-w-7xl mx-auto px-3 md:px-0 pt-0 md:pt-3'>
      <nav className='relative z-20  text-black flex justify-between items-center py-4'>
          {/* logo */}
          <a href='/' class="flex items-center gap-x-3">
              <svg class="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0V24H4.75736L24 4.75736V0ZM24 13.2426L13.2426 24H24V13.2426Z" /> </svg>
              <h3 class="text-xl md:text-2xl font-semibold tracking-tight">Ragavarman</h3>
          </a>
          {/* Toggle menu sm */}
          <div className="lg:hidden flex items-center justify-between">
              <button onClick={() => setexpendMenu(!expendMenu)} className="flex items-center gap-x-3">
                  <div className="relative h-6 w-6">
                      <img src={menuIconOuter} className="absolute left-1 top-1" alt="menu icon" />
                      <img src={menuIconInner} className={`absolute left-1 top-1 transition-all ${expendMenu && 'scale-75 rotate-45'}`} alt="menu icon" />
                  </div>
              </button>
          </div>
          {/* Menu Desktop */}
          <div  className="hidden lg:flex items-center gap-8">
            {navLinks.map((item,key)=>{
              return(
                <a key={key} href='/' className='text-base font-medium tracking-tight text-gray-500 hover:text-black'>{item.title}</a>
              )
            })}
            <a href="/" className='h-10 px-6 flex justify-center items-center text-white font-medium tracking-tight bg-black hover:bg-black/80  rounded-full'>Contact Me</a>
          </div>
          {/* Menu Mobile */}
          <div className={` lg:hidden absolute top-14 w-full h-auto py-5 px-3 bg-black rounded-xl ${!expendMenu && 'opacity-0'}`}>
          {navLinks.map((item,key)=>{
              return(
                <a key={key} href='/' className='block p-3 py-4 text-lg font-medium text-gray-400'>{item.title}</a>
              )
            })}
            <a href="/" className='h-12 mx-3 mt-4 px-6 flex justify-center items-center text-black font-semibold tracking-tight bg-white rounded-full'>Contact Me</a>
          </div>
      </nav>
    </header>
  )
}
