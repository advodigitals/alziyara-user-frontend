import React, { useState } from 'react'
import { Link } from 'react-router'
import { NavbarList } from '../../constants/NavBarItems'
import NavbarButtonDropdown from './NavbarButtonDropdown'


const NavbarButtons = (props) => {
  const page = props.page
  const [DropdownOption, setDropdownOption] = useState(false)
  const [activeButton , setActiveButton ] = useState(page)



  const handleButtonActive = (buttonName) => {
    setActiveButton(buttonName)
    console.log(buttonName,"button name ")
  }
  console.log(activeButton,"active button after athe fuctio")
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
          <ul className={`list-none   `} onMouseEnter={() => handleMouseEnter(dropbutton.dropdown ? dropbutton.name : '')} onMouseLeave={() => handleMouseLeave()  }>
            {/* {console.log(activeButton,"button after the fuction call")} */}
            <div className=" ">
              <Link to={dropbutton.path}  onClick={() => handleButtonActive(dropbutton.name)} className={`no-underline  px-4  font-semibold w-fit h-fit  rounded-lg cursor-pointer py-2 flex  hover:border border-primary-color transition-colors duration-[0.2s]  text-black hover:shadow-lg hover:shadow-slate-950/40 hover:text-primary-color hover:bg-white focus:text-primary-color  ${dropbutton.name === DropdownOption ? "text-primary-color border border-primary-color bg-white " : ""}${ activeButton === dropbutton.name ? `border border-primary-color text-primary-color shadow-lg shadow-slate-950/50 bg-white ` : ``}  `}>{dropbutton.name}{dropbutton.dropdownIcon}</Link>
              {dropbutton.name === DropdownOption && DropdownOption && <NavbarButtonDropdown  data={dropbutton.dropdownData} />}
            </div>
          </ul>

        ))
      }

    </>
  )
}

export default NavbarButtons
