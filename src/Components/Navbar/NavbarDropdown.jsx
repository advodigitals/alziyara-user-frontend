import React from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
const NavbarDropdown = () => {
  
  return (
    <>
      <div className=" flex  items-center bg-primary-color ">
        <ul className="flex flex-col items-center ">
          {
            NavbarList.map((button) => (
              <li className="list-none ">
                <Link to={button.path} className="no-underline inline-block  text-white font-semibold w-full h-fit hover:bg-main-color rounded-lg cursor-pointer py-3 left-0 justify-center px-4" >{button.name}</Link>
              </li>
            ))
          }

        </ul>
      </div>



    </>
  )
}

export default NavbarDropdown
