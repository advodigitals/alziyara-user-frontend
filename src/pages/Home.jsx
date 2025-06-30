
import ContactButton from '../constants/ContactButton'
import Layouts from '../Layouts/Layouts'
import images1 from '../Assets/images/travel1.avif'
import images2 from '../Assets/images/travel2.jpg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
  return (
    <Layouts>
      <div className="w-full h-screen bg-white flex justify-center">
        <div id='Heading-section' className="top-[95px] absolute ">
             <h1 className="text-[2.5rem] leading-[3.3rem] tracking-wide  font-medium text-third-color flex-wrap max-w-[800px] text-center" >
              Complete Travel Solutions with 
               <span className="text-primary-color font-medium text-[3rem]"> Care, Comfort & Commitment</span>
               {/* <span className="text-primary-color font-bold"> </span> */}
             </h1>
         
        </div>
        {/* <div className="flex max-w-[1400px] w-fit h-[calc(100vh-95px)]  bg-orange-500 absolute bottom-0">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full max-w-[1400px] w-[80vw]"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div> */}

        {/* <div id="afterSlide">
            <h1>hello hello</h1> <h1>hello hello</h1>
           <h1>hello hello</h1>
            <h1>hello hello</h1>
             <h1>hello hello</h1>
              <h1>hello hello</h1>
               <h1>hello hello</h1>
                <h1>hello hello</h1>
                 <h1>hello hello</h1>

          <h1>hello hello</h1> <h1>hello hello</h1>
           <h1>hello hello</h1>
            <h1>hello hello</h1>
             <h1>hello hello</h1>
              <h1>hello hello</h1>
               <h1>hello hello</h1>
                <h1>hello hello</h1>
                 <h1>hello hello</h1>


          <h1>hello hello</h1> <h1>hello hello</h1>
           <h1>hello hello</h1>
            <h1>hello hello</h1>
             <h1>hello hello</h1>
              <h1>hello hello</h1>
               <h1>hello hello</h1>
                <h1>hello hello</h1>
                 <h1>hello hello</h1>


          <h1>hello hello</h1> <h1>hello hello</h1>
           <h1>hello hello</h1>
            <h1>hello hello</h1>
             <h1>hello hello</h1>
              <h1>hello hello</h1>
               <h1>hello hello</h1>
                <h1>hello hello</h1>
                 <h1>hello hello</h1>
        </div> */}




      </div>
    </Layouts>
  )
}
export default Home

//  <div id="leftSection" className="bg-white h-full py-8 flex-wrap " >
//             <h1 className="text-[71px] leading-[73px] tracking-wide text-left font-normal text-third-color flex-wrap">
//               <span className="text-primary-color font-bold">Feel </span>
//               the real way of
//               <span className="text-primary-color font-bold"> Travelling.</span>
//             </h1>
//             <p className="text-base font-light text-third-color pt-[10px] capitalize leading-[24px]" >Alziyara is here to help you for completing your dream journeys in the perfect way.We have best experience in the industry of tour
//               and travels with a large No. of happy travellers completed their journey with us.</p>
//             <ContactButton className="mt-[20px]" width={200} margin={20}/>
//           </div>

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