import React from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
const NavbarButtons = (props) => {
 const scrolled = props.status
  return (
    <>
      {
        NavbarList.map((props) => (
          <li className="list-none">
            <Link to={props.path} className={`no-underline inline-block px-4  font-semibold w-fit h-fit  rounded-lg cursor-pointer py-2 ${ scrolled ? 'text-white hover:bg-main-color' : 'text-black hover:bg-primary-color'}`}>{props.name}</Link>
          </li>
        ))
      }

    </>
  )

}

export default NavbarButtons
