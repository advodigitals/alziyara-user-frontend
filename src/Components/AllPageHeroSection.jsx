import React from 'react'
import contactTopIMage from "../Assets/images/hajj&umrah-heading-image.jpg"


const ContactUsHeroSection = ({ title , titleDes}) => {
    return (
        <>
            <div id="top-image" className="w-full h-[25rem]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${contactTopIMage})` }}>
                <div className="w-full h-full bg-black bg-opacity-60 flex  justify-center items-center">
                    <div className="w-full max-w-[900px] mx-auto flex flex-col items-center justify-start px-2 sm:py-2 py-5 gap-2">
                        <h1 className="uppercase text-white font-semibold text-6xl text-center">{title}</h1>
                        <p className="text-white text-4xl font-extralight text-center uppercase ">{titleDes}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsHeroSection
