import React from 'react'
import hajjUmrahExplainImage from "../Assets/images/umrah-hajj-image.jpg"


const HajjUmrahPageExplanation = () => {
    return (
        <>
            <div className="flex lg:flex-row flex-col w-full h-fit container mx-auto px-4">
                <div data-aos="fade-right" id="image-section" className="flex  flex-1 p-3 items-center justify-center lg:justify-normal">
                    <img className="  w-[80%] rounded-[10px]  " src={hajjUmrahExplainImage} alt="" />
                </div>
                <div id="text" className="flex h-full flex-1 justify-center  items-end pt-6">
                    <div className="flex flex-col w-full h-full gap-6 ">
                        <h1 className=" text-black font-semibold text-5xl lg:text-left text-center leading-[54px]">Your sacred pilgrimage with Alziyara Travels</h1>
                        <p className="text-third-color text-lg text-left">For decades, Safiya Travels has been a trusted guide for pilgrims embarking on the journeys of Hajj and Umrah. We understand
                            the profound importance of these sacred experiences and strive to provide exceptional service. Whether you seek a meticulously planned individual Hajj tour or a flexible
                            Umrah package, we are here to ensure a seamless and stress-free experience. We prioritize personalized attention, and itineraries to your specific needs and preferences.
                            Our Hajj and Umrah packages offer carefully curated accommodations close to the Holy Sites, ensuring easy access and minimizing travel time. Additionally, we offer year-
                            round Umrah packages designed to accommodate your schedules.</p>
                        <hr className='border-[8px_solid_#9d9d9d] mx-3 my-6' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HajjUmrahPageExplanation
