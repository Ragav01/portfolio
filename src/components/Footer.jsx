import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-black py-14 px-3 lg:px-0'>
        <div className='max-w-6xl mx-auto  space-y-10  flex flex-col items-center text-white text-center'>
            <div className='space-y-5'>
                <h1 className='text-3xl md:text-5xl font-semibold tracking-tighter text-transparent py-2 bg-clip-text bg-gradient-to-r from-[#5b72e1] via-[#e240a6] to-[#f70000a1]'>Let’s work together</h1>
                <p className='text-base lg:text-lg font-light text-gray-400'>I'm currently looking to join an energetic team who <br /> enjoys learning on the fly and working collaboratively.</p>
            </div>
            <div className='p-[2px] bg-gradient-to-r from-[#4586ff]  to-[#f765ff]  hover:from-[#eb00f7] hover:to-[#5b72e1] rounded-full'>
                <a href="/" className='group py-2.5 px-6 block text-lg bg-black rounded-full'>hey.ragavarman@gmail.com</a>
            </div>
            <p className='text-sm lg:text-lg'>© 2023 All rights reserved. – Designed & Coded by Ragavaraman</p>
        </div>
    </footer>
  )
}
