import React from 'react'
import { Hero } from '../components/Hero'
import { Works } from '../components/Works'
import { Process } from '../components/Process'
import { About } from '../components/About'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Works/>
      <About/>
      <Process/>
    </>
  )
}
