import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const PackageMultiImageSwiper = ({ packageData }) => {
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <>
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
        </>
    )
}

export default PackageMultiImageSwiper
