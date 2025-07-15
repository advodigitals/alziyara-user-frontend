import React from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
const NavbarDropdown = (props) => {

  return (
    <>
      <div className= " bg-secondary-color w-full relative z-49 rounded-b-xl shadow-xl " >
        <ul className="flex flex-col  gap-[20px] py-[10px] " >
          {
            NavbarList.map((button) => (
              <li className="list-none  ">
                <Link to={button.path} className="no-underline inline-block  text-black font-semibold w-full h-fit hover:bg-dropdown-hover rounded-lg cursor-pointer  left-0  px-4 " >{button.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default NavbarDropdown
