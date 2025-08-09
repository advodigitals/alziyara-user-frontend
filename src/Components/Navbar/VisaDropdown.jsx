
import { visaDropdown } from '../../constants/NavBarItems'
import { Link } from 'react-router'



const VisaDropdown = (props) => {
   const scrolled = props.status
    
    return (
        <>
            <div className={`flex flex-col gap-2  fixed top-[61px] w-40 rounded-[10px] pl-3 py-3 ${scrolled ? "bg-third-color " : "bg-button-hover"}`}>
                {
                    visaDropdown.map((dropbutton) => (
                        <li className="h-full w-full block ">
                             <Link to={dropbutton.path} state={{type : dropbutton.dataPath}}  className="no-underline inline-block font-semibold w-full h-fit  cursor-pointer hover:text-white">{dropbutton.name}</Link>
                         </li>
                    ))
                }
            </div>
        </>
    )
}

export default VisaDropdown
