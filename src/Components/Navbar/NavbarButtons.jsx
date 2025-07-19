import React from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
import VisaDropdown from './VisaDropdown'
const NavbarButtons = (props) => {
 const scrolled = props.status

  return (
    <>
      {
        NavbarList.map((props) => (
          <li className="list-none">
            <div className=" ">
            <Link to={props.path} className={`no-underline inline-block px-4  font-semibold w-fit h-fit  rounded-lg cursor-pointer py-2 ${ scrolled ? 'text-black hover:bg-main-color' : 'text-black hover:bg-button-hover'}`}>{props.name}</Link>
            {props.dropdown && <VisaDropdown/>}
            </div>
          </li>
        ))
        
      
      }

    </>
  )

}

export default NavbarButtons
