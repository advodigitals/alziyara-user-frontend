import { Icon } from "@iconify/react/dist/iconify.js"

export const NavbarList = [
    {
      id : "1",
      name: "Home",
      path: "/"
    }, {
      id : "2",
      name: "About Us",
      path: "/about-us"
    }, {
      id : "3",
      name: "Tours",
      path: "/tours",
   
    }, {
      id : "4",
      name: "Visa",
      // path: "/",
      dropdown : true,
      dropdownIcon : <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />

    }, {
      id : "5",
      name: "Flights",
      path: "/flights"
    }, {
      id : "6",
      name: "Hajj-Umrah",
      path: "/hajj-umrah"
    }, {
      id : "7",
      name: "Packages",
      path: "/packages"
    }, {
      id : "8",
      name: "Blog",
      path: "/blog"
    },
]


export const visaDropdown = [

  {
    id : "2",
    name : "GCC Visa",
    path : "/visas",
    dataPath : "gcc"
  },
    {
    id : "1",
    name : "Globla Visa",
    path : "/visas",
    dataPath : "global"
  },
]
