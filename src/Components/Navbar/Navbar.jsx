import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import NavbarButtons from './NavbarButtons'
import NavbarDropdown from './NavbarDropdown'
import ContactButton from '../../constants/ContactButton'
import img from '../../Assets/images/logo.png'
import IMPNavbar from './IMPNavbar'

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
      <header >
        <nav id='header' className={`h-[95px] max-w-[1400px] w-full flex items-center justify-between mx-auto top-0 z-50  fixed transition-all duration-[0.5s] px-4 ${scrolled ? 'bg-primary-color ' : 'bg-transparent'}`}>    {/*max-w-[1400px]*/}
          <div className=" flex justify-center items-center hover:cursor-pointer  ">
            <img src={img} alt="" className="w-[90px] h-auto justify-center" />
          </div>
          
          <div className="content-center items-center hidden lg:flex">
            <ul className="flex flex-row">
              <NavbarButtons status={scrolled}/>
            </ul>
          </div>
          <ContactButton />
          <div className="flex justify-center items-center bg-primary-color p-[5px] cursor-pointer lg:hidden">  {/*lg:hidden*/}

            <i className="block text-white"  >
              <Icon icon="material-symbols:menu-rounded" width="34" height="34" onClick={() => setMenuOpen(!menuOpen)} /></i>
          </div>


        </nav>
      </header>

      {menuOpen && <NavbarDropdown />}

     

    </>
  )
}

export default Navbar
