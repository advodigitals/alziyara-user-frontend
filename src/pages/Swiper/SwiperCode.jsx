import React from 'react'
import images1 from '../../Assets/images/image1.jpg'
import images2 from '../../Assets/images/image2.jpg'
import images3 from '../../Assets/images/image3.jpg'
import images4 from '../../Assets/images/image4.jpg'
import images5 from '../../Assets/images/image5.jpg'
import images6 from '../../Assets/images/image6.jpg'
// import images7 from '../../Assets/images/image7.jpg'
// import images8 from '../../Assets/images/image8.jpg'
// import images9 from '../../Assets/images/image9.jpg'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperCode = () => {

    const swiperImageCollection = [

        { name: images1 },
        { name: images2 },
        { name: images3 },
        { name: images4 },
        { name: images5 },
        { name: images6 },
        // { name: images7 },
        // { name: images8 },
        // { name: images9 },
    ]
    return (
        <>
            <Swiper
                // onSwiper={(swiper: any) => (swiperRef.current = swiper)}
                // style={{
                //     '--swiper-button-prev' : 'hidden',
                //     '--swiper-button-next' : 'hidden',
                // }}
                spaceBetween={15}
                centeredSlides={true}
                speed={2200}
                loop={true}
                slidesPerView={1.5}

                autoplay={{
                    delay: 900,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,

                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'disabled_swiper_button'
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-[1400px] w-[98vw] rounded-[10px] h-[50vh] sm:h-auto">
                {
                    swiperImageCollection.map((images) => (
                        <SwiperSlide className='flex items-center justify-center overflow-hidden rounded-3xl hover:cursor-grab' ><img src={images.name} alt="" className='object-cover w-full h-full' /></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default SwiperCode
