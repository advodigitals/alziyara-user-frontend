
// import { visaDropdown } from '../../constants/NavBarItems'
import { Link } from 'react-router'



const NavbarButtonDropdown = (props) => {
   const dropdownData = props.data
   const scrolled = props.status

    return (
        <>
            <div className={`flex flex-col   fixed top-[61px] w-fit rounded-[10px]  ${scrolled ? "bg-third-color " : "bg-button-hover"}`}>
                {
                   dropdownData && dropdownData.map((dropbutton) => (
                        <li className="h-full w-full block rounded-[10px] shadow-sm shadow-slate-600/50 ">
                             <Link to={`${dropbutton.path}/${dropbutton.dataPath}`} className="no-underline inline-block font-semibold w-full h-fit cursor-pointer hover:bg-black hover:text-white px-3 py-2 rounded-[10px]">{dropbutton.name}</Link>
                         </li>
                    ))
                }
            </div>
        </>
    )
}

export default NavbarButtonDropdown
// state={{type : dropbutton.dataPath}}
// VisaDropdown