import React from 'react'
import StarRating from "../Components/StarRating"
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import profileImage from "../Assets/images/image5.jpg"

const TestimonialsSection = () => {
    return (
        <>
            <div className="flex  w-full h-fit lg:flex-row flex-col container mx-auto p-2 gap-y-4">
                <div id="title-block" className="flex flex-1 items-center justify-center text-center lg:text-left">
                    <h1 className="text-4xl sm:text-6xl font-medium text-primary-color leading-[68px]"><span className="text-4xl sm:text-6xl font-bold text-black leading-[58px]">Stories</span> From Our <span className="text-4xl sm:text-6xl font-bold text-black leading-[58px]">Customers</span>.</h1>
                </div>
                <div id="testimonials-section" className="flex w-full lg:flex-1 h-full justify-center items-center ">
                    <Swiper

                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="w-[210px] sm:w-[300px] h-[370px] md:h-[300px]"
                    >
                        <SwiperSlide className=' flex h-full w-full bg-white rounded-[10px] px-4 py-4  shadow-lg shadow-slate-600/50'>
                            <div className="h-full w-full flex flex-col gap-5 rounded-[10px] items-center justify-start">
                                <div className="flex  w-full h-fit gap-3">
                                    <div id="profile-icon" className="flex w-[4rem] h-full justify-start items-center">
                                        <img className='w-full h-[3rem] rounded-[50%] border-none object-cover bg-black' src={profileImage} alt="" />
                                    </div>
                                    <div id="details" className="flex w-full h-full flex-col items-start justify-center">
                                        <p className="text-black text-xl font-semibold">sahmeer cp</p>
                                        <p className="text-black text-sm font-light">7 days ago</p>
                                    </div>
                                </div>
                                <div className="flex  w-full justify-start">
                                    <StarRating rating={3.5} />
                                </div>
                                <p className="text-base text-black font-normal">which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TestimonialsSection


