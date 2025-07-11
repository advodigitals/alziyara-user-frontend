import React from 'react'
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperYoutube = () => {
    var swiperOptions = {
        loop: true,
        freeMode: true,
        spaceBetween: 0,
        grabCursor: true,
        slidesPerView: 7,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: true
        },
        freeMode: true,
        speed: 5000,
        freeModeMomentum: false
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    let wrapper = document.querySelector(".swiper-wrapper");
    let transformValue;

    wrapper.addEventListener("mouseenter", (event) => {
        swiper.autoplay.stop();
        transformValue = wrapper.style.transform;
        wrapper.style.transitionDuration = "0ms";
        wrapper.style.transform =
            "translate3d(" + swiper.getTranslate() + "px, 0px, 0px)";
    });

    wrapper.addEventListener("mouseleave", (event) => {
        wrapper.style.transitionDuration = swiper.params.speed + "ms";
        wrapper.style.transform = transformValue;
        swiper.autoplay.start();
    });

    return (
        <>
            {/* <Swiper
       watchSlidesProgress={true}
       slidesPerView={5}
       spaceBetween={15} 
      
      className="w-[98vw] h-full">
        <SwiperSlide className='h-[200px] bg-slate-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-gray-500'>Slide 2</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-zinc-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-neutral-500'>Slide 4</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-stone-500'>Slide 5</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-red-500'>Slide 6</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-orange-500'>Slide 7</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-amber-500'>Slide 8</SwiperSlide>
        <SwiperSlide className='h-[200px] bg-yellow-500'>Slide 9</SwiperSlide>
      </Swiper> */}
            <div class="swiper-container">
                <div class="swiper-wrapper w-[98vw] h-full">
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/250/g);">1</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/260);">2</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/270);">3</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/270/y);">4</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/280/y);">5</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/190/y);">6</div>
                    <div className='h-[200px] bg-slate-500' style="background-image: url(https://placekeanu.com/300/);">7</div>
                </div>
            </div>

        </>
    )
}

export default SwiperYoutube
