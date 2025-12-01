import React from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const ContactButton = (props) => {
  return (
    <>
      <div id='navbarContactButton' className="  h-fit w-fit" >
        <Link to={"/contact-us"} >
          <div className={`flex items-center justify-center rounded-[10px]  h-fit w-fit gap-4 py-3 px-3 text-white   hover:text-primary-color bg-primary-color hover:bg-white transition-all duration-[0.5s]  hover:shadow-lg hover:shadow-slate-950/40 border border-primary-color`}>
            <p className=" text-lg fon font-light uppercase">Contact us</p>
            <span className=" "><Icon icon="streamline-freehand:help-headphones-customer-support-human" width="30" height="30" className='' /></span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ContactButton
// border-none  hover:bg-button-hover