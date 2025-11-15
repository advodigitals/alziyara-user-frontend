import React from 'react'
import hajjUmrahHeadingImage from '../Assets/images/hajj&umrah-heading-image.jpg'

const AllPageHeroSection = ({ title , titleDes }) => {
    return (
        <>
            <div id="heading-image-section" className="w-full h-fit max-w-[2000px] mx-auto sm:h-[25rem] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${hajjUmrahHeadingImage})` }}>
                <div className="w-full  h-full  bg-black bg-opacity-70 flex flex-col items-center justify-center gap-4">
                    <div className="w-full max-w-[900px] mx-auto px-2 sm:py-2 py-5">
                        <h1 className="capitalize text-white font-semibold text-6xl text-center">{title}</h1>
                    </div>
                    <div className=" w-full max-w-[650px] mx-auto px-2 sm:py-2 py-5">
                        <p className="text-white text-lg text-center">{titleDes}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AllPageHeroSection

