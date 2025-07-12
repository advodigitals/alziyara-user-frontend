import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const LateestFromUs = () => {

    const youtubeArray = [
        {
            vnum: "0",
            title: "frame1"
        },
        {
            vnum: "1",
            title: "frame2"
        },
        {
            vnum: "2",
            title: "frame3"
        },
        {
            vnum: "3",
            title: "frame4"
        },
        {
            vnum: "4",
            title: "frame5"
        },
        {
            vnum: "5",
            title: "frame6"
        },
        {
            vnum: "6",
            title: "frame7"
        },
        {
            vnum: "7",
            title: "frame8"
        },
        {
            vnum: "8",
            title: "frame9"
        },
    ]

    // var swiperOptions = {
    //     loop: true,
    //     freeMode: true,
    //     spaceBetween: 4,
    //     grabCursor: true,
    //     slidesPerView: 7,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: true
    //     },
    //     speed: 5000,
    //     freeModeMomentum: false,


    // };

    // var swiper = new Swiper(".swiper-container", swiperOptions);

    // let wrapper = document.querySelector(".swiper-wrapper");
    // let transformValue;

    // const el = document.querySelector('#overlayBtn');
    // if (el) {
    //     el.addEventListener('click', wrapper, false);
    // }

    // wrapper.addEventListener("mouseleave", (event) => {
    //     wrapper.style.transitionDuration = swiper.params.speed + "ms";
    //     wrapper.style.transform = transformValue;
    //     swiper.autoplay.start();
    // });

    /* YOUTUBE EMBED CODE START */


    const loadVideo = iframe => {
        const cid = "UC3lZtiOPoBDZLTIU-AberiA"
        const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
        const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
        fetch(reqURL)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const videoNumber = iframe.getAttribute('vnum')
                const link = result.items[videoNumber].link;
                const id = link.substring(link.indexOf("=") + 1);
                iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
            })
            .catch(error => console.log('error', error));
    }
    const iframes = document.getElementsByClassName('latestVideoEmbed');
    for (let i = 0, len = iframes.length; i < len; i++) {
        loadVideo(iframes[i]);
    }

    /*YOUTUBE EMBED CODE END */

    return (
        <> 
         {/* <div id="latest-from-us" className=''> */}
            {/* <div id="youtube" className=""> */}
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={4}
                    loop={true}
                    freeMode={true}
                    speed={1000}
                    // freeModeMomentum={false}
                    // allowTouchMove={false}
                    spaceBetween={15}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper w-full h-[300px] !ease-linear">
                    <div className="swiper-wrapper ease-linea w-full">
                        <SwiperSlide className="h-full  bg-red-500 items-center justify-center">
                            {/* <iframe title="frame1" class="latestVideoEmbed" vnum='0' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe> */}
                        </SwiperSlide>
                        <SwiperSlide className="h-full w-full bg-orange-500  ">
                            <iframe title="frame2" class="latestVideoEmbed" vnum='1' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full  w-full bg-amber-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='2' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full  w-full bg-yellow-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='3' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full w-full bg-lime-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='4' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full w-full bg-teal-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='5' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full w-full bg-green-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='6' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full w-full bg-cyan-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='7' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide className="h-full  w-full bg-purple-500 items-center justify-center">
                            <iframe title="frame3" class="latestVideoEmbed" vnum='8' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
                        </SwiperSlide>
                    </div>
                </Swiper>
            {/* </div> */}
        {/* </div> */}
        </>
    )
}
export default LateestFromUs


// "UC4P7fgvQinbOJDEJ9lluZWA"


//   {
//                         youtubeArray.map((array) => (
//                              <SwiperSlide className="h-full w-full bg-orange-500  ">
//                         <iframe title={array.title} class="latestVideoEmbed" vnum={array.vnum} className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                     </SwiperSlide>
//                         ))
//                      }

