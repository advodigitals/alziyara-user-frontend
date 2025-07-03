import { Icon } from "@iconify/react/dist/iconify.js";
import { SwiperButtonProps } from "./NextButton";

const PrevButton = ({ swiperRef }) => {
  return (
    <div className="flex justify-start h-full items-center">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className=" text-black py-2 transition mx-2">
        {console.log(swiperRef, "hello")}
        <span><Icon icon="simple-line-icons:arrow-left" width="30" height="30" /></span>
      </button>
    </div>
  );
};
export default PrevButton;