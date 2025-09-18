import React from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const ContactButton = (props) => {
  return (
    <>
      <div id='navbarContactButton' className=" invisible lg:visible">
        <Link to={"/contact-us"}>
          <div className={`flex items-center justify-center rounded-[10px] bg-primary-color h-fit w-fit gap-2 py-3 px-3 border-none  hover:bg-button-hover `}>
            <p className="text-white text-lg font-light ">CONTACT US</p>
            <span className="text-white"><Icon icon="material-symbols:contacts-product" width="28" height="28" /></span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ContactButton
//  w-[${props.width ? props.width : "160px" }]
