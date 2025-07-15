import React from 'react'
import SwiperCode from '../pages/Swiper/SwiperCode'

const SwiperSection = () => {
    return (
        <>
            <div className='w-full relative flex justify-between pb-[20px]  '>
                <div className="flex max-w-[1400px] w-screen flex-1 max-h-[600px]">
                    <div id="leftgradient" className="absolute  top-0 bottom-[20px] left-0 w-[10vw] z-40  bg-gradient-to-r from-white  ">
                        {/* <PrevButton swiperRef={swiperRef} /> */}
                    </div>
                    <div id="rightgradient" className="absolute  top-0 bottom-[20px] right-0 w-[10vw] z-40 bg-gradient-to-l from-white ">
                        {/* <NextButton swiperRef={swiperRef} /> */}
                    </div>
                    <SwiperCode />
                </div>
            </div>
        </>
    )
}

export default SwiperSection
