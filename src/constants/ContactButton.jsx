import React from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const ContactButton = (props) => {
  return (
    <>
      <div id='navbarContactButton' className=" invisible lg:visible h-fit w-fit" >
        <Link to={"/contact-us"} >
          <div className={`flex items-center justify-center rounded-[10px] bg-primary-color h-fit w-fit gap-4 py-3 px-3 border-none  hover:bg-button-hover `}>
            <p className="text-white text-lg font-light ">CONTACT US</p>
            <span className="text-white "><Icon icon="streamline-freehand:help-headphones-customer-support-human" width="30" height="30" className='' /></span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ContactButton
