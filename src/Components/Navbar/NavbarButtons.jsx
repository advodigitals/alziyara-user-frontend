import React, { useState } from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
import VisaDropdown from './VisaDropdown'
const NavbarButtons = (props) => {
  const scrolled = props.status
  const [visaDropdownOption, setVisaDropdownOption] = useState(false)
  const handleMouseEnter = (status) => {
    if (status) {
      setVisaDropdownOption(true)
    }
  }
  const handleMouseLeave = () => {
    setVisaDropdownOption(false)
  }
  return (
    <>
      {
        NavbarList.map((props) => (
          <li className="list-none" onMouseEnter={() => handleMouseEnter(props.dropdown)} onMouseLeave={() => handleMouseLeave()}>
            <div className=" ">
              <Link to={props.path} className={`no-underline  px-4  font-semibold w-fit h-fit  rounded-lg cursor-pointer py-2 flex gap-1 ${scrolled ? 'text-black hover:bg-main-color' : 'text-black hover:bg-button-hover'}`}>{props.name}{props.dropdownIcon}</Link>
              {props.dropdown && visaDropdownOption && <VisaDropdown status={scrolled}/>}
            </div>
          </li>
        ))
      }
    </>
  )
}

export default NavbarButtons
