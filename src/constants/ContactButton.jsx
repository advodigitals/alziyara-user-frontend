import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const ContactButton = (props) => {
  return (
   <>
     <div id='navbarContactButton' className="pr-[20px] invisible lg:visible">
      {console.log(props.width)}
             <button className={`flex items-center justify-center rounded-[10px] bg-primary-color h-[50px] w-[160px] border-none gap-[5px] hover:bg-button-hover mt-[${props.margin && props.margin}px]`}>
               <p className="text-white text-base ">CONTACT US</p>
               <span className="text-white"><Icon icon="material-symbols:contacts-product" width="28" height="28" /></span>
             </button>
    </div>
   </>
  )
}

export default ContactButton
//  w-[${props.width ? props.width : "160px" }]