
// import ContactButton from '../constants/ContactButton'
// import LateestFromUs from '../Components/LateestFromUs'
// import InstagramSlider from '../Components/InstagramSlider'
import AboutCards from '../Components/AboutCards'
import HeadingSection from '../Components/HeadingSection'
import Services from '../Components/Services'
import SwiperSection from '../Components/SwiperSection'
// import YoutubeSlider from '../Components/YoutubeSlider'
import Layouts from '../Layouts/Layouts'
import AboutUs from './AboutUs'
import Footer from '../Components/Footer'
import TestimonialsSection from '../Components/TestimonialsSection'

// import SwiperYoutube from './Swiper/SwiperYoutube'
// import { useRef } from "react"
// import { Swiper as SwiperType } from "swiper";
const Home = () => {

  return (
    <Layouts>
      <div className="w-full max-w-[1400px]  bg-white flex items-center flex-col mx-auto ">
        <HeadingSection />
        <SwiperSection />
      </div>
      <div id="aboutUs" className="flex w-full max-w-[2000px] items-center gap-5 justify-center py-5 flex-wrap  mx-auto">
        <AboutCards />
        <Services />
        <AboutUs />
        {/* <YoutubeSlider /> */}
        {/* <InstagramSlider/> */}
        <TestimonialsSection/>
      </div>
      <Footer />
    </Layouts>
  )
}
export default Home 
