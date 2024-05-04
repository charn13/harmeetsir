import Navbar from '@/components/Navbar'
import Login from '@/components/ui/Login'
import { title } from 'process'
import React from 'react'



  export const metadata = {
    title:"login"
  }
const page = () => {
  return (
   <>
    <div><Navbar /></div>
   <div className='p-9 '>
    
   <Login/>
   
   
   </div>
   </>


  )
}

export default page