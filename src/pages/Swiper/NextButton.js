import { Icon } from "@iconify/react/dist/iconify.js";


// export interface SwiperButtonProps {
//   swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
// }

const NextButton = ({ swiperRef }) => {
  return (
    <div className="flex justify-end h-full items-center">
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className=" text-black py-2 transition mx-2">
        <span><Icon icon="simple-line-icons:arrow-right" width="30" height="30" /></span>
      </button>
    </div>
  );
};

export default NextButton;

// : SwiperButtonProps