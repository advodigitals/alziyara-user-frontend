import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import { handleSinglePackage } from '../api/package/package'
import PackageHeroDataSection from '../Components/PackageHeroDataSection'
import PackageRestDataSection from '../Components/PackageRestDataSection'
import PackageDescriptionDataSection from '../Components/PackageDescriptionDataSection'
import PackageIncludesAndExcludesDataSection from '../Components/PackageIncludesAndExcludesDataSection'
import PackageItneryDataSection from '../Components/PackageItneryDataSection'
// import image from '../Assets/test.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const PackageIndividualPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [packageData, setPackageData] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const allPackageData = async () => {
            const allPackageDataArray = await handleSinglePackage(name)
            setPackageData(allPackageDataArray?.data)
        }
        allPackageData()
    }, [name])

    // const allPackageData = async () => {
    //     const allPackageDataArray = await handleSinglePackage(name)
    //     setPackageData(allPackageDataArray?.data)
    // }


    return (
        <>
            <Layouts>
                <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col pb-10 gap-8">
                    <PackageHeroDataSection packageData={packageData} />
                    <div id="image-section" className="flex w-full container mx-auto h-[30rem] flex-col items-center gap-3  ">
                        {/* <img src={packageData.coverImg} alt="" className='h-full w-full object-cover ' /> */}
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            // navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 w-full h-[85%]"
                        >
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            {/* <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-full h-full cursor-grab '>
                                <img src={packageData.coverImg} className="block w-full h-full rounded-[10px]" alt='' />
                            </SwiperSlide> */}

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={'auto'}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            // breakpoints={{
                            //     480: {
                            //         slidesPerView: 5
                            //     },
                                
                            //     1400: {
                            //         slidesPerView: 'auto'
                            //     }


                            // }}
                            className="mySwiper  max-w-[900px] mx-auto h-[10%] box-border flex items-center justify-center"
                        >
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            {/* <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                             <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide>
                            <SwiperSlide className='bg-cover bg-center w-[35px] md:w-[50px] h-[80%] md:h-full opacity-[0.7] cursor-pointer'>
                                <img src={packageData.coverImg} className="block w-full h-full object-cover rounded-[5px]" alt='' />
                            </SwiperSlide> */}

                        </Swiper>
                    </div>
                    <div id="remaining-details-section" className="flex h-fit w-full container mx-auto md:flex-row flex-col pt-10 p-2">
                        <div className="flex h-full basis-1/2 flex-col gap-5 ">
                            <PackageRestDataSection packageData={packageData} />
                            <hr className='border-[3px_solid_#9d9d9d] mx-6 my-8' />
                            <PackageDescriptionDataSection packageData={packageData} />
                            <PackageIncludesAndExcludesDataSection packageDataDetails={packageData.inclusion} packageDataDetailsHeading={"includes"} />
                            <PackageIncludesAndExcludesDataSection packageDataDetails={packageData.exclusion} packageDataDetailsHeading={"excludes"} />
                        </div>
                        <PackageItneryDataSection packageData={packageData} />
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default PackageIndividualPage
