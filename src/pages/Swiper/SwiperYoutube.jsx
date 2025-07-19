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
            

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" ></div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/260);">2</div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/270);">3</div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/270/y);">4</div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/280/y);">5</div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/190/y);">6</div>
                    <div class="swiper-slide" style="background-image: url(https://placekeanu.com/300/);">7</div>
                </div>
            </div>

        </>
    )
}

export default SwiperYoutube
