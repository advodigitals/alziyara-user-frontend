import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import NavbarButtons from './NavbarButtons'
import NavbarDropdown from './NavbarDropdown'
import ContactButton from '../../constants/ContactButton'
import img from '../../Assets/images/logo.png'
import VisaDropdown from './VisaDropdown'


// import $ from 'jquery';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <header className={`w-full  top-0 left-0 right-0  z-50 transition-all duration-[0.5s]  h-[95px] ${scrolled ? 'bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  fixed' : 'bg-transparent sticky'}`} >
        <nav id='header' className={` max-w-[1400px] mx-auto w-full flex items-center justify-between   px-4`}>
          <div className=" flex justify-center items-center hover:cursor-pointer  ">
            <img src={img} alt="" className="w-[90px] h-auto justify-center" />
          </div>
          <div className="content-center items-center hidden lg:flex">
            <ul className=" flex items-center">
              <NavbarButtons status={scrolled} />
            
            </ul> 
          </div>
          <ContactButton />
          <div className="flex justify-center items-center bg-transparent p-[5px] cursor-pointer lg:hidden"> 
            <i className="block text-black transition ease-in duration-[5s]" onClick={() => setMenuOpen(!menuOpen)}  >
              {menuOpen ? <Icon icon="uiw:close" width="20" height="20" /> : <Icon icon="material-symbols:menu-rounded" width="34" height="34" />}
            </i>
          </div>
        </nav>
      </header>
      {menuOpen && <NavbarDropdown status={scrolled} />}
    </>
  )
}

export default Navbar
