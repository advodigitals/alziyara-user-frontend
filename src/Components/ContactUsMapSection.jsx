import React from 'react'

const ContactUsMapSection = () => {
    return (
        <>
            <div className="h-fit flex flex-1  flex-col items-center px-4">
                <div className="w-full h-[25rem] md:h-[30rem] shadow-lg shadow-slate-600/50 rounded-[10px] flex  items-center justify-center ">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8361146929947!2d76.070724!3d11.050911099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a91d42e766b%3A0x4f644a940026bddb!2sAl%20ZIYARA%20TRAVELS%20%26%20HAJJ%20UMRAH%20SERVICE!5e0!3m2!1sen!2sin!4v1758020193339!5m2!1sen!2sin" className='w-full h-full border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className=" w-full flex-1 flex-col flex items-start justify-center  py-2 rounded-[10px]">

                    <a href="/">
                        <p className="text-black text-lg sm:text-2xl font-medium">www.alziyaratravels.com</p>
                    </a>

                    <a href="mailto:support@alziyaratravels.com" className="">
                        <p className="text-black text-lg sm:text-2xl font-medium">support@alziyaratravels.com</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactUsMapSection
