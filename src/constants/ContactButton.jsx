import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const ContactButton = () => {
  return (
   <>
     <div id='navbarContactButton' className="pr-[20px] invisible lg:visible">
             <button className="flex items-center justify-center rounded-[10px] bg-primary-color h-[50px] w-[160px] border-none gap-[5px] hover:bg-button-hover">
               <p className="text-white text-base ">CONTACT US</p>
               <span className="text-white"><Icon icon="material-symbols:contacts-product" width="28" height="28" /></span>
             </button>
           </div>
   </>
  )
}

export default ContactButton
