import React, { useState } from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const FooterSocialMeadiasSection = () => {

    const [visibleOne, setVisibleOne] = useState(false)
    const [visibleTwo, setVisibleTwo] = useState(false)
    const [visibleThree, setVisibleThree] = useState(false)

    const handleMouseEnter = (state) => {
        state(true);
    };

    const handleMouseLeave = (state) => {
        state(false);
    };

    return (
        <>
            <div id="Social-media-section" className=" h-fit w-full  flex lg:flex-row px-2 flex-col pt-4 ">
                <div className="h-full w-full flex items-center justify-center flex-col flex-1">
                    <div>
                        <h1 className="text-4xl text-white text-left font-bold">GET IN TOUCH WITH US</h1>
                        <p className="text-white text-lg text-left font-normal">Follow Us on Social Media</p>
                    </div>
                </div>
                <div className="flex flex-1  h-full w-full sm:justify-center justify-start pt-3">
                    <div className=" flex flex-col sm:flex-row gap-3 items-start sm:gap-8">
                        <Link to={("https://www.facebook.com/share/19H6kUuHTE/")}>

                            <div className={`flex flex-row items-center gap-3  justify-center hover:text-black`} onMouseEnter={() => handleMouseEnter(setVisibleOne)} onMouseLeave={() => handleMouseLeave(setVisibleOne)}>
                                <span className={`p-2 border border-solid border-white rounded-[40px] text-white ${visibleOne && "bg-black"}`} ><Icon icon="ei:sc-facebook" width="30" height="30" /></span>
                                <p className={` text-base  font-normal ${visibleOne ? "text-black" : "text-white"}`} >FACEBOOK</p>
                            </div>
                        </Link>
                        <Link to={("https://www.instagram.com/alziyaramalappuram?igsh=MWo2OWdrbnllaXk4ZA==")}>
                            <div className="flex flex-row items-center gap-3  justify-center" onMouseEnter={() => handleMouseEnter(setVisibleTwo)} onMouseLeave={() => handleMouseLeave(setVisibleTwo)}>
                                <span className={`p-2 border border-solid border-white rounded-[40px] text-white hover:bg-black ${visibleTwo && "bg-black"}`}><Icon icon="carbon:logo-instagram" width="30" height="30" /></span>
                                <p className={` text-base  font-normal  ${visibleTwo ? "text-black" : "text-white"}`}>INSTAGRAM</p>
                            </div>
                        </Link>
                        <Link to={("https://www.youtube.com/@alziyaratravelsandhajjumra")} >
                            <div className="flex flex-row items-center gap-3  justify-center" onMouseEnter={() => handleMouseEnter(setVisibleThree)} onMouseLeave={() => handleMouseLeave(setVisibleThree)}>
                                <span className={`p-2 border border-solid border-white rounded-[40px] text-white hover:bg-black ${visibleThree && "bg-black"}`}><Icon icon="la:youtube" width="30" height="30" /></span>
                                <p className={` text-base  font-normal  ${visibleThree ? "text-black" : "text-white"}`}>YOUTUBE</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSocialMeadiasSection



