import { Icon } from "@iconify/react/dist/iconify";
import React from "react";
import { Link } from "react-router";

const IMPNavbar = () => {
  const buttonIcon = [
    {
      icons: <Icon icon="guidance:passports" width="22" height="22" />,
      title: "Visa",
      urls: "/visa",
    },
    {
      icons: 
      <Icon icon="ic:outline-airplane-ticket" width="24" height="24" />,
      title: "Flights",
      urls: "/flights",
    },
    {
      icons: <Icon icon="la:kaaba" width="24" height="24" />,
      title: "Umrah",
      urls: "/hajj-umrah",
    },
    {
      icons: (
        <Icon icon="fluent:shopping-bag-16-regular" width="24" height="24" />
      ),
      title: "Packages",
      urls: "/packages",
    },
  ];
  return (
    <>
      <aside className="w-full  fixed  bottom-[30px] flex justify-center items-center px-[10px] z-50 lg:hidden">
        <div className=" w-full max-w-[400px] bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[10px] px-[20px] py-[5px] border border-white border-solid">
          <ul className="flex flex-row items-center justify-between">
            {buttonIcon.map((details) => (
              <div className="flex flex-col items-center">
                <Link to={details.urls} className="text-black">
                  {details.icons}
                </Link>
                <p className="text-black cursor-pointer text-xs">
                  {details.title}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default IMPNavbar;