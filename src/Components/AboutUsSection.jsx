import React from 'react'

const AboutUsSection = () => {
    return (
        <>
            <div id="aboutUs" className="flex flex-col items-center w-full max-w-[1100px] mx-auto gap-8 pt-6 px-3">
                <h1 className="text-4xl font-bold text-black">About Us<span className="text-primary-color">.</span></h1>
                <div className="flex gap-4 md:flex-row flex-col items-center justify-center gap">
                    <div id="video" className="flex-1">
                        <iframe className="rounded-[10px] h-[315px]  w-full" src="https://www.youtube.com/embed/nIPmt1ye6HU?si=owXw7is7PyNd7qUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div id="text" className=" text-third-color py-4 xl:flex-wrap flex-1">
                        <p className="text-xl leading-[32px] text-center md:text-left"><span className="text-gray-600">Al-Ziyara</span> 
                            Travels is a prominent name and best destination for Hajj & Umrah services apart from domestic and international travel assistance. Located in Kizhakkethala ,
                            Malappuram in Kerla.It has been a leading tour and travel provider with a successful stint of national and international experience of providing the customers with satisfactory services.
                            Alziyara have now successfully completed more than 27 years and by dealing with more than 2 lakh of our happy customers.We can assure you the best services with this year of experience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection
