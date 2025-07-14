import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCQynSwd3-g8kVukFgPFn8iA"
const MAX_RESULTS = 8

const LateestFromUs = () => {

    

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
                slidesPerView={4}
                loop={true}
                freeMode={true}
                speed={1000}
                // freeModeMomentum={false}
                spaceBetween={15}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
            <div className="flex w-full max-w-[1400px] mx-auto h-14 bg-black">
            </div>
          
        </>
    )
}
export default LateestFromUs


// "UC4P7fgvQinbOJDEJ9lluZWA"

//   {
//                         youtubeArray.map((array) => (
//                             <SwiperSlide className="h-full w-full bg-orange-500  ">
//                         <iframe title={array.title} class="latestVideoEmbed" vnum={array.vnum} className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                             </SwiperSlide>
//                         ))
//                      }



// AIzaSyCxLI1G5MJ5AoszGxpL8CfwSfk0Oq9G2hc


//  <SwiperSlide className="h-full  bg-red-500 items-center justify-center">
//                             {/* <iframe title="frame1" class="latestVideoEmbed" vnum='0' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe> */}
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full w-full bg-orange-500  ">
//                             <iframe title="frame2" class="latestVideoEmbed" vnum='1' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full  w-full bg-amber-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='2' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full  w-full bg-yellow-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='3' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full w-full bg-lime-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='4' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full w-full bg-teal-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='5' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full w-full bg-green-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='6' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full w-full bg-cyan-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='7' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>
//                         <SwiperSlide className="h-full  w-full bg-purple-500 items-center justify-center">
//                             <iframe title="frame3" class="latestVideoEmbed" vnum='8' className='w-full h-[300px]' frameborder="0" allowfullscreen></iframe>
//                         </SwiperSlide>