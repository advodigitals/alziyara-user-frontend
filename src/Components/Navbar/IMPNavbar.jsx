import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'
import { Link } from 'react-router'

const IMPNavbar = () => {

 const buttonIcon = [
    {
      icons : <Icon icon="guidance:passports" width="24" height="24" />,
      title : "Visa",
      urls  : "/visa"
    },
      {
      icons : <Icon icon="mingcute:flight-takeoff-line" width="24" height="24" />,
      title : "Flights",
      urls  : "/flights"
    },{
      icons : <Icon icon="la:kaaba" width="24" height="24" />,
      title : "Umrah",
      urls  : "/hajj-umrah"
    },{
      icons : <Icon icon="fluent:shopping-bag-16-regular" width="24" height="24" />,
      title : "Packages",
      urls  : "/packages"
    },
  ]
  return (
  <>
  <div className=" w-full max-w-[400px] bg-primary-color rounded-[10px] absolute bottom-[30px] mx-[20px] px-[20px] py-[5px]">
     <ul className="flex flex-row items-center justify-between">
             {
              buttonIcon.map((details) => (
                <div className="flex flex-col items-center">
                <Link to={details.urls} className="text-white">{details.icons}
                </Link>
                <p className="text-white cursor-pointer text-xs">{details.title}</p>
                </div>
              ))
             }
      </ul>
  </div>

  </>
  )
}

export default IMPNavbar
