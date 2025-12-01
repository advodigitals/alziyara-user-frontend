import React from 'react'
import StarRating from "../Components/StarRating"
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsDataArray } from '../constants/TestimonialsData';

const TestimonialsSection = () => {
    return (
        <>
            <div className="flex  w-full h-fit lg:flex-row flex-col container mx-auto px-3 gap-y-4 pb-5 md:pb-10 pt-6">
                <div data-aos="fade-right"  id="title-block" className="flex flex-1 items-center justify-center text-center lg:text-left">
                    <h1 className="text-4xl sm:text-6xl font-medium text-primary-color sm:leading-[68px]"><span className="text-4xl sm:text-6xl font-bold text-black leading-[58px]">Stories</span> From Our <span className="text-4xl sm:text-6xl font-bold text-black leading-[58px]">Customers</span>.</h1>
                </div>
                <div data-aos="fade-left" id="testimonials-section" className="flex w-full lg:flex-1 h-full justify-center items-center ">
                    <Swiper

                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="w-[210px] sm:w-[300px] h-[370px] md:h-[300px]"
                    >
                        {
                            testimonialsDataArray.map((details) => (
                                    <SwiperSlide className=' flex h-full w-full bg-white rounded-[10px] px-4 py-4  shadow-lg shadow-slate-600/50 cursor-grab'>
                            <div className="h-full w-full flex flex-col gap-5 rounded-[10px] items-start justify-start">
                                <div className="flex  w-full h-fit gap-3">
                                    <div id="profile-icon" className="flex w-[4rem] h-full justify-start items-center">
                                      <a href={details.commentUrl} className='w-full h-fit'><img className='w-full h-[3rem] rounded-[50%] border-none object-cover bg-black' src={details.img} alt="" /></a>
                                    </div>
                                    <div id="details" className="flex w-full h-full flex-col items-start justify-center">
                                       <a href={details.commentUrl}> <p className="text-black text-xl hover:text-[#197bff] font-normal hover:underline decoration-[#197bff]">{details.name}</p></a>
                                        {/* <p className="text-third-color text-sm font-light">7 days ago</p> */}
                                    </div>
                                </div>
                                <div className="flex  w-full justify-start">
                                    <StarRating rating={details.rating} />
                                </div>
                                <p className="text-base text-black font-normal">{details.comment}</p>
                                <a href={details.commentUrl} className={`text-left text-[#197bff] hover:underline ${details.commentStatus ? 'opacity-100' : 'opacity-0' }`}>Read more</a>
                            </div>
                        </SwiperSlide>
                            ))
                        }
                        
                       
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TestimonialsSection


