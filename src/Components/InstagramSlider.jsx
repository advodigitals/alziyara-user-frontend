import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/react/dist/iconify.js';

const InstagramSlider = () => {
    return (
        <>
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={1}
                loop={true}
                freeMode={true}
                speed={2000}
                // freeModeMomentum={false}
                spaceBetween={15}
                // autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                breakpoints={{
                    460: {
                        slidesPerView: 2
                    },
                    600: {
                        slidesPerView: 3
                    },
                    900: {
                        slidesPerView: 4
                    }

                }}
                modules={[Autoplay]}
                className="mySwiper w-full h-[300px] !ease-linear">

                <SwiperSlide className="h-full w-full ">

                </SwiperSlide>

            </Swiper>
            <div className="flex w-full max-w-[1400px] mx-auto  py-2 justify-center items-center">
                <div className="h-fit w-fit  ">
                    <button className="w-[180px] h-[45px] bg-white rounded-[10px] flex justify-center items-center gap-3  shadow-lg shadow-slate-500/100">
                        <p className="text-primary-color text-lg font-semibold ">See More</p>
                        <Icon icon="logos:youtube-icon" width="30px" height="30" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default InstagramSlider
