
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
      <div className="w-full h-screen bg-white flex items-center flex-col ">
        <div id='Heading-section' className=" pb-[20px]">
             <h1 className="text-[2.5rem] leading-[3.3rem] tracking-wide  font-medium text-third-color max-w-[800px] text-center" >
              Complete Travel Solutions with 
               <span className="text-primary-color font-medium text-[3rem]"> Care, Comfort & Commitment</span>
               {/* <span className="text-primary-color font-bold"> </span> */}
             </h1>
         
        </div>
        <div className="flex max-w-[1400px] w-fit flex-1  bg-transparent ">
         
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
             loop = {true}
             slidesPerView={1.5}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full max-w-[1400px] w-[80vw]"
          >
            <SwiperSlide className='bg-slate-400'><img src={images1} alt="" className='block w-full h-full object-cover' /></SwiperSlide>
            <SwiperSlide className='bg-gray-400'><img src={images2} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'><img src={images3} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-neutral-400'><img src={images4} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-stone-400'><img src={images5} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-red-400'><img src={images6} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-orange-400'><img src={images7} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-amber-400'><img src={images8} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
            <SwiperSlide className='bg-yellow-400'><img src={images9} alt="" className='block w-full h-full object-cover'/></SwiperSlide>
             {/* <SwiperSlide className='bg-slate-400'></SwiperSlide>
            <SwiperSlide className='bg-gray-400'></SwiperSlide>
            <SwiperSlide className='bg-zinc-400'></SwiperSlide>
            <SwiperSlide className='bg-neutral-400'></SwiperSlide>
            <SwiperSlide className='bg-stone-400'></SwiperSlide>
            <SwiperSlide className='bg-red-400'></SwiperSlide>
            <SwiperSlide className='bg-orange-400'></SwiperSlide>
            <SwiperSlide className='bg-amber-400'></SwiperSlide>
            <SwiperSlide className='bg-yellow-400'></SwiperSlide> */}
          </Swiper>
        </div>

      




      </div>

      {/* <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1>
      <h1>nihal</h1> */}

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