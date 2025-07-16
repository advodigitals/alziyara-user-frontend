import React from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const FooterSocialMeadiasSection = () => {
    return (
        <>
            <div id="Social-media-section" className=" h-fit w-full  flex lg:flex-row px-2 flex-col py-4 ">
                <div className="h-full w-full flex items-center justify-center flex-col flex-1">
                    <div>
                        <h1 className="text-4xl text-white text-left font-bold">GET IN TOUCH WITH US</h1>
                        <p className="text-white text-lg text-left font-normal">Follow Us on Social Media</p>
                    </div>
                </div>
                <div className="flex flex-1  h-full w-full flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8">
                    <Link to={("https://www.facebook.com/share/19H6kUuHTE/")} className="flex flex-row items-center gap-3 justify-center">
                        <span className=" p-[5px] sm:p-2 border border-solid border-white rounded-[40px] text-white hover:bg-button-hover sm:text-left"><Icon icon="ei:sc-facebook" width="34" height="34" /></span>
                        <p className="text-white text-base  font-normal sm:text-left">FACEBOOK</p>
                    </Link>
                    <Link to={("https://www.instagram.com/alziyaramalappuram?igsh=MWo2OWdrbnllaXk4ZA==")} className="flex flex-row items-center gap-3  justify-center">
                        <span className=" p-2 border border-solid border-white rounded-[40px] text-white hover:bg-button-hover sm:text-left"><Icon icon="carbon:logo-instagram" width="30" height="30" /></span>
                        <p className="text-white text-base  font-normal sm:text-left">INSTAGRAM</p>
                    </Link>
                    <Link to={("https://www.youtube.com/@alziyaratravelsandhajjumra")} className="flex flex-row items-center gap-4 sm:gap-3 justify-center">
                        <span className=" p-2 border border-solid border-white rounded-[40px] text-white hover:bg-button-hover sm:text-left"><Icon icon="la:youtube" width="30" height="30" /></span>
                        <p className="text-white sm:text-lg text-base font-normal sm:font-light sm:text-left ">YOUTUBE</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FooterSocialMeadiasSection
