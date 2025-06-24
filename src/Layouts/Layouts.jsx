import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Layouts = ({children}) => {
  return (
    <>
    <Navbar/>
    
    {children}
    </>
  )
}

export default Layouts
