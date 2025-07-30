// import React, { useEffect, useState } from 'react';
// import { Icon } from '@iconify/react/dist/iconify.js';

// const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
// const CHANNEL_ID = "UCQynSwd3-g8kVukFgPFn8iA";
// const MAX_RESULTS = 8;
 
// const YoutubeSlider = () => {
//     const [videos, setVideos] = useState([]);

//     const handleNavigateToYoutube = () => {
//         const YoutubeChannelURL = "https://www.youtube.com/@alziyaratravelsandhajjumra";
//         window.open(YoutubeChannelURL, '_blank');
//     };

//     useEffect(() => {
//         async function fetchVideos() {
//             try {
//                 const res = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
//                 );
//                 const data = await res.json();
//                 const videoItems = data.items.filter(item => item.id.kind === "youtube#video");
//                 setVideos(videoItems);
//             } catch (error) {
//                 console.error("Error in videos:", error);
//             }
//         }
//         fetchVideos();
//     }, []);

//     return (
//         <>
//             <div className="relative overflow-hidden w-full bg-white h-[300px]">
//                 <div className="animate-marquee whitespace-nowrap flex gap-6">
//                     {[...videos, ...videos].map((video, index) => (
//                         <div key={index} className="inline-block w-full">
//                             <iframe
//                                 width="100%"
//                                 height="100%"
//                                 src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                                 frameBorder="0"
//                                 allowFullScreen
//                                 className="rounded-[10px]"
//                                 title='slider'
//                             />
//                             {/* <p className="mt-2 text-center font-semibold text-sm flex flex-wrap flex-col">
//                                 {video.snippet.title}
//                             </p> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="flex w-full max-w-[1400px] mx-auto py-2 justify-center items-center">
//                 <div className="h-fit w-fit">
//                     <button
//                         className="w-[180px] h-[45px] bg-white rounded-[10px] flex justify-center items-center gap-3 shadow-lg shadow-slate-500/100"
//                         onClick={handleNavigateToYoutube}
//                     >
//                         <p className="text-primary-color text-lg font-semibold">See More</p>
//                         <Icon icon="logos:youtube-icon" width="30px" height="30" />
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default YoutubeSlider;


import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from 'swiper/modules';
import { Icon } from '@iconify/react';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCQynSwd3-g8kVukFgPFn8iA";
const MAX_RESULTS = 8;

const YoutubeSlider = () => {

    const handleNaivgateToYotube = () => {
        const YoutubeChannelURL = "https://www.youtube.com/@alziyaratravelsandhajjumra";
        window.open(YoutubeChannelURL);
    }

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
                );
                const data = await res.json();
                const videoItems = data.items.filter(item => item.id.kind === "youtube#video");
                setVideos(videoItems);
            } catch (error) {
                console.error("Error in videos:", error);
            }
        }
        fetchVideos();
    }, []);

    return (
        <>
            <Swiper
                slidesPerView="auto"
                loop={true}
                speed={5000} // Adjust this to control speed (lower = faster)
                spaceBetween={15}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false, // Ensures it doesn't stop on hover
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper w-full h-[500px]"
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id.videoId} className="h-full !w-[350px]">
                        <div className="aspect-video h-full w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                frameBorder="0"
                                allowFullScreen
                                className="rounded-[10px]"
                                title={video.snippet.title}
                            />
                            <p className="mt-2 text-center font-semibold">{video.snippet.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex w-full max-w-[1400px] mx-auto py-2 justify-center items-center">
                <button
                    className="w-[180px] h-[45px] bg-white rounded-[10px] flex justify-center items-center gap-3 shadow-lg shadow-slate-500/100"
                    onClick={handleNaivgateToYotube}
                >
                    <p className="text-primary-color text-lg font-semibold">See More</p>
                    <Icon icon="logos:youtube-icon" width="30px" height="30" />
                </button>
            </div>
        </>
    );
};

export default YoutubeSlider;

// dhfidhfiohedohfo h
