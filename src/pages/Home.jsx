
// import ContactButton from '../constants/ContactButton'
// import LateestFromUs from '../Components/LateestFromUs'
// import InstagramSlider from '../Components/InstagramSlider'
import AboutCards from '../Components/AboutCards'
import HeadingSection from '../Components/HeadingSection'
import Services from '../Components/Services'
import SwiperSection from '../Components/SwiperSection'
// import YoutubeSlider from '../Components/YoutubeSlider'
import Layouts from '../Layouts/Layouts'
import TestimonialsSection from '../Components/TestimonialsSection'
import FAQ from '../Components/FAQ'
import AboutUsSection from '../Components/AboutUsSection'



// import SwiperYoutube from './Swiper/SwiperYoutube'
// import { useRef } from "react"
// import { Swiper as SwiperType } from "swiper";
const Home = () => {


  return (
    <>
      <Layouts page={"Home"}>
        <div className="w-full max-w-[1400px]  bg-white flex items-center flex-col mx-auto ">
          <HeadingSection />
          <SwiperSection />
        </div>
        <div id="aboutUs" className="flex w-full max-w-[1400px] items-center gap-5 justify-center py-5 flex-wrap  mx-auto">
          <AboutCards />
          <Services />
          <AboutUsSection />
          {/* <YoutubeSlider /> */}
          {/* <InstagramSlider/> */}
          <FAQ />
          <TestimonialsSection />
        </div>
        
      </Layouts>
    </>
  )
}
export default Home 
