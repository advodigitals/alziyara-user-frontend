import React, { useState } from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
import NavbarButtonDropdown from './NavbarButtonDropdown'
const NavbarButtons = (props) => {
  const scrolled = props.status
  const [DropdownOption, setDropdownOption] = useState(false)
  const handleMouseEnter = (dropbutton) => {

      setDropdownOption(dropbutton)
    
  }
  const handleMouseLeave = () => {
    setDropdownOption(false)

  }
  return (
    <>
      {
        NavbarList.map((dropbutton) => (

          <li className="list-none" onMouseEnter={() => handleMouseEnter(dropbutton.dropdown ? dropbutton.name : '')} onMouseLeave={() => handleMouseLeave()}>
            <div className=" ">
              <Link to={dropbutton.path} className={`no-underline  px-4  font-semibold w-fit h-fit  rounded-lg cursor-pointer py-2 flex  ${scrolled ? 'text-black hover:bg-main-color' : 'text-black hover:bg-button-hover'} ${dropbutton.name === DropdownOption ? "bg-button-hover" : ""}`}>{dropbutton.name}{dropbutton.dropdownIcon}</Link>
              {dropbutton.name === DropdownOption && DropdownOption && <NavbarButtonDropdown status={scrolled} data={dropbutton.dropdownData} />}
            </div>
          </li>
        ))
      }
    </>
  )
}

export default NavbarButtons
