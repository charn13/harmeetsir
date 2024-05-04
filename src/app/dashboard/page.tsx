'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Dashboard from '@/components/Dashboard'

const page = () => {
  return (
    <>
    <Navbar/>
    <div style={{"marginTop":"50px"}}><Dashboard/></div>
    </>
  )
}

export default page