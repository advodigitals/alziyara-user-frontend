import React from 'react'
import { Link } from 'react-router'

const AboutUsReadmore = () => {
  return (
    <>
        <div  className="mt-2">
                                    <Link to={"./about-us"} >
                                        <div className="flex  p-2 rounded-[10px] text-white  hover:text-primary-color bg-primary-color hover:bg-white transition-all duration-[0.5s]  shadow-lg shadow-slate-600/50 border border-primary-color" >
                                            <p className="text-lg uppercase font-semibold  ">read more </p>
                                        </div>
                                    </Link>
                                </div>
    </>
  )
}

export default AboutUsReadmore
