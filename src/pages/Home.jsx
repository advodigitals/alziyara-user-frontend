
import IMPNavbar from '../Components/Navbar/IMPNavbar'
import Layouts from '../Layouts/Layouts'


const Home = () => {
  return (
    <Layouts>

        <div className="absolute top-0 left-0 max-w-[1400px] w-full px-4 h-screen bg-slate-600">  
         <div className="absolute top-[95px] left-0 w-full h-[calc(100vh-95px)] px-[30px]">
            <div id="IMPnavbar" className="flex justify-center bg-red-500">

            <IMPNavbar></IMPNavbar>
            </div>
         </div>
        </div>
    </Layouts>
  )
}

export default Home

