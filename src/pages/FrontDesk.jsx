import React from 'react'
import cover from '../assets/front-desk/front-desk-cover.webp'
import wireframe from '../assets/front-desk/wireframe.webp'
import logoPrimary from '../assets/front-desk/Logo-primary.svg'
import logoLight from '../assets/front-desk/Logo-light.svg'
import logoDark from '../assets/front-desk/Logo-dark.svg'
import components from '../assets/front-desk/Components.webp'
import allScreen from '../assets/front-desk/all-screen.webp'
import img1 from '../assets/front-desk/image-1.webp'
import img2 from '../assets/front-desk/image-2.webp'
import img3 from '../assets/front-desk/image-3.webp'
import img4 from '../assets/front-desk/image-4.webp'

export const FrontDesk = () => {
  return (
    <>
      <div className='max-w-7xl md:mx-auto mx-3 md:mt-10 p-4 md:p-10 bg-gray-200 rounded-xl md:rounded-3xl'>
        <img  src={cover} alt="cover-img" />
      </div>
      {/* Overview */}
      <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h1 className='text-4xl tracking-tight font-semibold'>Front Desk - Automates the process of attending to guest</h1>
          <p className='text-gray-700 text-lg leading-8'>Effective hotel management is critical for the success of any business in the hospitality industry. An outdated or inefficient management system can hinder the smooth operation of a hotel.</p>
          <p className='text-gray-700 text-lg leading-8'>Front Desk Hotel management system (HMS) is a tool that streamlines and simplifies various activities and tasks related to managing a hotel, including daily operations, booking, and reservations. A user-friendly HMS can help a hotel achieve better efficiency and productivity, leading to increased revenue and customer satisfaction.</p>
          <div className='flex flex-wrap gap-10 pt-5'>
            <div className='space-y-3'>
              <h3 className='font-bold'>Role</h3>
              <p className='text-gray-700'>Product Designer </p>
              <p className='text-gray-700'>UI Developer</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Tools</h3>
              <p className='text-gray-700'>Figma</p>
              <p className='text-gray-700'>React js</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Timeline</h3>
              <p className='text-gray-700'>4 Weeks - Design </p>
              <p className='text-gray-700'>3 Weeks - UI Development</p>
            </div>
          </div>
        </div>
      </section>
      {/* Business Needs */}
      <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Business need</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h1 className='text-4xl tracking-tight font-semibold'>Client request</h1>
          <p className='text-gray-700 text-lg leading-8'>The system will include different sets of functionality for hotel staff, such as front desk, housekeeping, and restaurant operations, as well as guests. Additionally, we will design a promotional website to showcase the features and benefits of the system to potential customers.</p>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>Problem</h3>
          <p className='text-gray-700 text-lg leading-8'>Managing a hotel can be a challenging task, especially when it comes to handling operations like bookings and guest information. Without a proper system in place, it can be difficult to keep track of important details and ensure that everything</p>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>Connection the dots</h3>
          <p className='text-gray-700 text-lg leading-8'>In order to help understand how this product fits into the day to day workflow of the target audience, I conducted interviews with Hotel Admins to gain a general understanding of the market and to understand how services are being run. The main aim was to understand and connect user goals and business goals.</p>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>The goal of the project</h3>
          <ul className='list-disc pl-6 space-y-5'>
            <li className='text-gray-700 text-lg leading-8'> Improve the experience of the front desk so as to eliminate waiting time for guest </li>
            <li className='text-gray-700 text-lg leading-8'> Additionally, designing the look and for providing a better navigation</li>
            <li className='text-gray-700 text-lg leading-8'> Simplify booking procedures, maximize housekeeping efficiency, and indepth analytics to track operations and reduce work bottlenecks</li>
          </ul>
        </div>
      </section>
      {/* Wireframe */}
      <div className='bg-gray-900 max-w-7xl md:mx-auto mx-3 rounded-xl md:rounded-3xl'>
        <img src={wireframe} alt="wireframe" />
      </div>
      {/* Brand and Style-guide */}
      <section>
       <div className='md:flex gap-5'>
        <div className='md:w-8/12 space-y-5'>
          {/* Typeface */}
          <div className='bg-white rounded-3xl p-5 md:p-8'>
          <p className='text-lg'>Typeface</p>
              <h3 className='text-4xl font-bold'>Poppins</h3>
              <div className="flex flex-wrap items-end justify-around py-5 md:pb-0 md:pt-14">
                <span className='text-8xl font-semibold '>Aa </span>
                <span className='text-7xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-6xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-5xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-4xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-3xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-2xl font-semibold'>Aa</span>
                <span className='hidden lg:block text-xl font-semibold'>Aa</span>
              </div>
          </div>
          {/* Color */}
          <div className='bg-white rounded-3xl overflow-hidden'>
              <div className="h-52 md:h-96 flex items-end">
                <div className='w-1/4 h-1/4 bg-purple-300'></div>
                <div className='w-1/4 h-2/4 bg-yellow-200'></div>
                <div className='w-1/4 h-3/4 bg-green-500'></div>
                <div className='w-1/4 h-full bg-slate-950'></div>
              </div>
          </div>
        </div>
        {/* Icon Logo */}
        <div className='md:w-4/12 bg-blue-50 rounded-3xl flex md:flex-col items-center justify-evenly mt-5 md:mt-0 p-5 md:p-8'>
          <img src={logoPrimary} className='h-20 md:h-36' alt="..." />
          <img src={logoLight} className='h-20 md:h-36' alt="..." />
          <img src={logoDark} className='h-20 md:h-36' alt="..." />
        </div>
       </div>
      </section>
      {/* Components */}
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white p-5 md:p-12 rounded-3xl'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold pb-5 md:pb-10'>40+ Components</h2>
          <img src={components} alt="..." />
        </div>
      </div>
      {/* Grid components */}
      <section>
        <div className="md:flex flex-wrap gap-5">
          <div className='md:flex-1 mb-4 md:mb-0 bg-gray-900 rounded-xl md:rounded-3xl'>
            <img src={img1} className='p-5 md:p-20' alt="..." />
          </div>
          <div className='md:flex-1 mb-4 md:mb-0 relative bg-gray-900 overflow-hidden rounded-xl md:rounded-3xl'>
            <img src={img2} className='p-5 h-full md:absolute md:top-14 md:-right-12' alt="..." />
          </div>
          <div className="w-full h-full mb-4 md:mb-0 rounded-xl md:rounded-3xl">
            <img src={allScreen} alt="..." />
          </div>
          <div  className='md:flex-1 mb-4 md:mb-0 bg-gray-900 rounded-xl md:rounded-3xl'>
            <img src={img3} className='p-5 md:p-20' alt="..." />
          </div>
          <div  className='md:flex-1 relative bg-gray-900 overflow-hidden rounded-xl md:rounded-3xl'>
            <img src={img4} className='p-5 h-full md:absolute md:top-14 md:-right-12' alt="..." />
          </div>
        </div>
      </section>
    </>
  )
}
