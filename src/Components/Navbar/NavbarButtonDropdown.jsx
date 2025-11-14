
// import { visaDropdown } from '../../constants/NavBarItems'
import { Link } from 'react-router'



const NavbarButtonDropdown = (props) => {
   const dropdownData = props.data
   const scrolled = props.status

    return (
        <>
            <div className={`flex flex-col bg-white border border-primary-color  fixed top-[61px] w-fit rounded-[10px]  transition-all duration-[0.2s]  shadow-lg shadow-slate-950/90 gap-1`}>
                {
                   dropdownData && dropdownData.map((dropbutton) => (
                        <li className="h-full w-full block rounded-[10px] hover:shadow-lg shadow-slate-950/90 hover:text-primary-color text-black hover:border border-primary-color">
                             <Link to={`${dropbutton.path}/${dropbutton.dataPath}`} className="no-underline inline-block font-semibold w-full h-fit cursor-pointer hover:bg-white hover:text-primary-color px-3 py-2 rounded-[10px]">{dropbutton.name}</Link>
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



