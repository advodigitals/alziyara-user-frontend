import { Icon } from "@iconify/react/dist/iconify";
import React from "react";
import { Link } from "react-router";

const IMPNavbar = () => {
  const buttonIcon = [
    {
      icons: "ion:home-outline",
      title: "Home",
      urls: "/",
    },
    {
      icons: "mdi:passport-check",
      title: "Visa",
      urls: "/visas/gcc",
    },
    {
      icons: "la:kaaba",
      title: "Umrah",
      urls: "/hajj-umrah",
    },
    {
      icons: "fontisto:holiday-village" ,
      title: "Packages",
      urls: "/packages/international-packages",
    },
  ];
  return (
    <>
      <aside className="w-full  fixed  bottom-[30px] flex justify-center items-center px-[10px] z-50 lg:hidden">
        <div className=" w-full max-w-[400px] bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[10px] px-[20px] py-[5px] border border-white border-solid">
          <ul className="flex flex-row items-center justify-between">
            {buttonIcon.map((details) => (
              <Link to={details.urls} className="">
                <div className="flex flex-col items-center text-black ">
                  <span className=""><Icon icon={details.icons} width="24" height="24" /></span>
                  <p className=" cursor-pointer text-xs font-medium">{details.title}</p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default IMPNavbar;