
import ContactButton from '../constants/ContactButton'
import Layouts from '../Layouts/Layouts'
import images1 from '../Assets/images/travel1.avif'
import images2 from '../Assets/images/travel2.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
  return (
    <Layouts>
      <div className="w-full h-screen bg-blue-400">
        {/* <div className="flex max-w-[1400px] w-full h-[calc(100vh-95px)] flex-row bg-black">
        <div id="leftSection" className="bg-white h-full py-8 flex-wrap " >
            <h1 className="text-[71px] leading-[73px] tracking-wide text-left font-normal text-third-color flex-wrap">
              <span className="text-primary-color font-bold">Feel </span>
              the real way of
              <span className="text-primary-color font-bold"> Travelling.</span>
            </h1>
            <p className="text-base font-light text-third-color pt-[10px] capitalize leading-[24px]" >Alziyara is here to help you for completing your dream journeys in the perfect way.We have best experience in the industry of tour
              and travels with a large No. of happy travellers completed their journey with us.</p>
            <ContactButton className="mt-[20px]" width={200} margin={20}/>
          </div> */}
        <div id="rightSection" className="bg-green-500 h-screen w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='flex items-center gap-4 h-screen'

          >
            <SwiperSlide className='bg-slate-400'>Slide 1</SwiperSlide>
            <SwiperSlide className='bg-slate-400'>Slide 2</SwiperSlide>
            <SwiperSlide className='bg-slate-400'>Slide 3</SwiperSlide>
            <SwiperSlide className='bg-slate-400'>Slide 4</SwiperSlide>

          </Swiper>
        </div>
      </div>
      {/* </div>  */}
    </Layouts>
  )
}
export default Home

