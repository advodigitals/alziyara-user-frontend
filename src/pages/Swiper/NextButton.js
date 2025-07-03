import { Icon } from "@iconify/react/dist/iconify.js";
import SwiperInstance from "swiper";

// export interface SwiperButtonProps {
//   swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
// }

const NextButton = ({ swiperRef }) => {
  return (
    <div className="flex justify-end h-full items-center">
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className=" text-white py-2 transition ">
        <span><Icon icon="simple-line-icons:arrow-right" width="50" height="50" /></span>
      </button>
    </div>
  );
};

export default NextButton;

// : SwiperButtonProps