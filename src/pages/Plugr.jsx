import React from 'react'
import cover from '../assets/plugr/plugr-cover-banner.webp'
import homeWireframe from '../assets/plugr/Home.svg'
import statisticWireframe from '../assets/plugr/Statistic.svg'
import addMemberWireframe from '../assets/plugr/Members_Add.svg'
import Wireframe from '../assets/plugr/WireframeLightFill.webp'

export const Plugr = () => {
  return (
    <>
      <div className='max-w-screen-2xl md:mx-auto mx-3 md:mt-10 p-4 md:p-10 bg-[#30304C] rounded-xl md:rounded-3xl'>
        <img  src={cover} alt="cover-img" />
      </div>
      {/* Overview */}
      <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h1 className='text-4xl tracking-tight font-semibold'>A fresh approach automation solution</h1>
          <p className='text-gray-700 text-lg leading-8'>During the last summer, I got a chance to design a smart home application for Plugr that deals with smart home products.</p>
          <p className='text-gray-700 text-lg leading-8'>Imagine a home where everything can be controlled with one tap on your smartphone. You can change the lighting according to your mood, create a perfect environment for watching your favorite movies, and the list goes on. This indeed seems fascinating and sounds like we are living in a magical world, but all these things already exist in reality. Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
          <div className='flex flex-wrap gap-10 pt-5'>
            <div className='space-y-3'>
              <h3 className='font-bold'>Role</h3>
              <p className='text-gray-700'>UI/UX Design</p>
              <p className='text-gray-700'>UI Developer</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Tools</h3>
              <p className='text-gray-700'>Figma</p>
              <p className='text-gray-700'>Flutter</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Timeline</h3>
              <p className='text-gray-700'>5 Weeks - Design </p>
              <p className='text-gray-700'>6 Weeks - UI Development</p>
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
          <h1 className='text-4xl tracking-tight font-semibold'>Problem Statement</h1>
          <p className='text-gray-700 text-lg leading-8'>As there are a lot of smart home brands out there, a user may have smart devices of many different brands. But they couldn’t always connect or communicate with each other. The controller for a Nest thermostat won’t read the directive sent by the Alexa app. Thus a user will have to install a bunch of apps for each brand of devices. The abundance of smart home apps that don’t work together leads</p>
          <p className='text-gray-700 text-lg leading-8'>Suppose you have five smart devices in your home each of which comes from a different brand. Each time you want to control a device, you’ll have to open a new app. That is obviously a frustrating thing to do and the problem increases with more number of brands.</p>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>Problem</h3>
          <p className='text-gray-700 text-lg leading-8'>Managing a hotel can be a challenging task, especially when it comes to handling operations like bookings and guest information. Without a proper system in place, it can be difficult to keep track of important details and ensure that everything</p>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>Solution</h3>
          <p className='text-gray-700 text-lg leading-8'>As many people who were using the company’s products were facing this problem, product team came up with the solution of building a single app which could control all the devices.</p>
          <p className='text-gray-700 text-lg leading-8'>This is where the use of developer APIs comes into the picture. APIs or Application Programming Interfaces, in the most general sense, are the lines of code that allow various software components to talk to one another to allow various tasks or actions to happen. Numerous companies now offer APIs to developers for their smart home products. Using these APIs, our developers could build a third party service which would interact with all the devices of various brands.</p>
        </div>
      </section>
      {/* Wireframe */}
      <div className='bg-[#121212]'>
        <section>
          <div className='flex justify-between pb-8 md:pb-20'>
            <img src={homeWireframe} alt="" />
            <img src={statisticWireframe} alt="" />
            <img src={addMemberWireframe} alt="" />
          </div>
          <img src={Wireframe} alt="" />
        </section>
      </div>
    </>
  )
}
