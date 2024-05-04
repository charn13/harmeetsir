import React from 'react'
import Signup from '../../components/ui/Signup'
import Navbar from '@/components/Navbar'
import { title } from 'process'
 

 export const metadata ={
      title
 }

const page = () => {
  return (
    <>
    <div><Navbar/></div>
    <div><Signup /></div>
    </>
  )
}

export default page