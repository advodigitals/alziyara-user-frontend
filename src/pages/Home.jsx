
// import ContactButton from '../constants/ContactButton'
import Layouts from '../Layouts/Layouts'
import NextButton from './Swiper/NextButton'
import PrevButton from './Swiper/PrevButton'
import SwiperCode from './Swiper/SwiperCode'
import { useRef } from "react"
import { Swiper as SwiperType } from "swiper";
const Home = () => {
    const swiperRef = useRef<SwiperType | null>(null);
  return (
    <Layouts>
      <div className="w-full max-w-[1400px] h-[calc(100vh-95px)] bg-white flex items-center flex-col mx-auto">
        <div id='Heading-section' className=" pb-[20px] mt-2 mb-2">
          <h1 className="sm:text-[2.5rem]  text-[1.25rem] sm:leading-[3.3rem] leading-[1.6rem] tracking-wide  font-medium text-third-color max-w-[800px] text-center" >
            Complete Travel Solutions with
            <span className="text-primary-color font-medium sm:text-[3rem] text-[1.4rem]"> Care, Comfort & Commitment.</span>
            {/* <span className="text-primary-color font-bold"> </span> */}
          </h1>
        </div>
        <div className='w-full relative flex justify-between pb-[20px]  '>
          <div className="flex max-w-[1400px] w-screen flex-1 max-h-[600px]">
            <div id="leftgradient" className="absolute  top-0 bottom-[20px] left-0 w-[10vw] z-40  bg-gradient-to-r from-white  ">
              {/* <PrevButton swiperRef={swiperRef} /> */}
            </div>
            <div id="rightgradient" className="absolute  top-0 bottom-[20px] right-0 w-[10vw] z-40 bg-gradient-to-l from-white ">
              {/* <NextButton swiperRef={swiperRef} /> */}
            </div>
           <SwiperCode/>
          </div>
        </div>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>

        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    </Layouts>
  )
}
export default Home 