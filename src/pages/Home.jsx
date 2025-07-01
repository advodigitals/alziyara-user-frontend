
// import ContactButton from '../constants/ContactButton'
import Layouts from '../Layouts/Layouts'
import images1 from '../Assets/images/travel1.avif'
import images2 from '../Assets/images/travel2.jpg'
import images3 from '../Assets/images/image3.jpg'
import images4 from '../Assets/images/image4.jpg'
import images5 from '../Assets/images/image5.jpg'
import images6 from '../Assets/images/image6.jpg'
import images7 from '../Assets/images/image7.jpg'
import images8 from '../Assets/images/image8.jpg'
import images9 from '../Assets/images/image9.jpg'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
  return (
    <Layouts>
      <div className="w-full h-[calc(100vh-95px)] bg-white flex items-center flex-col">
        <div id='Heading-section' className=" pb-[20px]">
          <h1 className="text-[2.5rem] leading-[3.3rem] tracking-wide  font-medium text-third-color max-w-[800px] text-center" >
            Complete Travel Solutions with
            <span className="text-primary-color font-medium text-[3rem]"> Care, Comfort & Commitment</span>
            {/* <span className="text-primary-color font-bold"> </span> */}
          </h1>
        </div>
        <div className='w-full relative flex justify-between pb-[20px]'>
          <div className="flex max-w-[1400px] w-screen flex-1 h-fit ">
            <div id="leftgradient" className="absolute  top-0 bottom-0 right-0 w-[5vw] z-40 bg-gradient-to-l from-cyan-500 to-blue-500">
            </div>
            <div id="rightgradient" className="absolute  top-0 bottom-0 left-0 w-[5vw] z-40 bg-gradient-to-r from-cyan-500 to-blue-500">
            </div>
            <Swiper
              spaceBetween={15}
              centeredSlides={true}
              speed={1600}
              loop={true}
              slidesPerView={1.5}
              // autoplay={{
              //   delay: 900,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper max-w-[1400px] w-[90vw]"
            >
              <SwiperSlide ><img src={images1} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images2} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images3} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images4} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images5} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images6} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images7} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images8} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
              <SwiperSlide ><img src={images9} alt="" className='block w-full h-screen object-cover' /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* 
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1>
      // <h1>nihal</h1> */}
    </Layouts>
  )
}
export default Home



//  <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             spaceBetween={50}
//             slidesPerView={3}
//             navigation
//             pagination={{ clickable: true }}
//             scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//             className='flex items-center gap-4 h-screen'

//           >
//              </Swiper>