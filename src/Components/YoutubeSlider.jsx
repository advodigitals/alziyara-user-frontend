import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/react/dist/iconify.js';
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCQynSwd3-g8kVukFgPFn8iA"
const MAX_RESULTS = 8

const YoutubeSlider = () => {

    const handleNaivgateToYotube = () => {
        const YoutubeChannelURL = "https://www.youtube.com/@alziyaratravelsandhajjumra"
        window.open(YoutubeChannelURL)

    }
     /* NEW YOUTUBE EVMBEDED CODE START*/
    const [videos, setVideos] = useState([])
    useEffect(() => {
        async function fetchVideos() {
            try {
                console.log("API KEY:", YOUTUBE_API_KEY);
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
                )
                const data = await res.json()



                data.items.forEach((item, index) => {
                    console.log(`🔹 Item ${index + 1}:`, item);
                });


                console.log("Fetched YouTube data:", data);
                const videoItems = data.items.filter(item => item.id.kind === "youtube#video")
                setVideos(videoItems);
            } catch (error) {
                console.error("Error in videos:", error);
            }
        }
        fetchVideos()
    }, [])
    /* NEW YOUTUBE EVMBEDED CODE END*/
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
                    460:{
                        slidesPerView:2
                    },
                    600:{
                        slidesPerView:3
                    },
                    900:{
                        slidesPerView:4
                    }

                }}
                modules={[Autoplay]}
                className="mySwiper w-full h-[300px] !ease-linear">
                {videos.map((video) => (
                    <SwiperSlide className="h-full w-full ">
                        <div key={video.id.videoId} className="aspect-video h-full w-full ">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                frameBorder="0"
                                showinfo="0"
                                allowFullScreen
                                className="rounded-[10px]"
                                title='slider'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex w-full max-w-[1400px] mx-auto  py-2 justify-center items-center">
                <div className="h-fit w-fit  ">
                    <button className="w-[180px] h-[45px] bg-white rounded-[10px] flex justify-center items-center gap-3  shadow-lg shadow-slate-500/100">
                        {onclick= handleNaivgateToYotube}
                        <p className="text-primary-color text-lg font-semibold ">See More</p>
                        <Icon icon="logos:youtube-icon" width="30px" height="30" />
                    </button>
                </div>
            </div>
        </>
    )
}
export default YoutubeSlider
