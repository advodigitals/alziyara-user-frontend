import React, { useState } from 'react'
import { visaDropdown } from '../../constants/NavBarItems'
import { Link } from 'react-router'

const VisaDropdown = () => {
    const [visaDropdown,setVisaDropdown] = useState(false)
    
    return (
        <>
            <div className="flex flex-col gap-2 bg-primary-color fixed top-[60px] w-40 ">
                {
                    visaDropdown.map((dropbutton) => (
                        <li className="h-full w-full block">
                            <Link to={dropbutton.path} className="no-underline inline-block font-semibold w-fit h-fit rounded-lg cursor-pointer ">{dropbutton.name}</Link>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default VisaDropdown
