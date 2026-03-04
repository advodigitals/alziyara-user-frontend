import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { handleAllPackageDisplay } from '../api/umrah-and-hajj/umrahHajjPackage'
// import HajjUmrahHeroSection from '../Components/HajjUmrahHeroSection'
// import HajjUmrahPageExplanation from '../Components/HajjUmrahPageExplanation'
// import HajjUmrahPackageSection from '../Components/HajjUmrahPackageSection'
// import HajjUmrahServiceSection from '../Components/HajjUmrahServiceSection'
// import HajjUmrahDescriptionSection from '../Components/HajjUmrahDescriptionSection'


const HajjUmrahHeroSection = React.lazy(() => import ("../Components/HajjUmrahHeroSection"))
const HajjUmrahServiceSection = React.lazy(() => import("../Components/HajjUmrahServiceSection"))
const HajjUmrahPackageSection = React.lazy(() => import("../Components/HajjUmrahPackageSection"))
const HajjUmrahPageExplanation = React.lazy(() => import ("../Components/HajjUmrahPageExplanation"))
const HajjUmrahDescriptionSection = React.lazy(() => import("../Components/HajjUmrahDescriptionSection"))

const HajjUmrah = () => {
   const [packageData , setPackageData] = useState([])
   
   
     useEffect(() => {
       allPackageData()
       // eslint-disable-next-line 
     },[])
   
   
     const allPackageData = async () => {
       const allPackageDataArray = await handleAllPackageDisplay()
      //  console.log(allPackageDataArray.data.packagesData,"difiehhihiii")
       setPackageData(allPackageDataArray.data.packagesData)
     }
   
   

   return (
      <>
         <Layouts page={"Hajj-Umrah"}>
            <div className="flex h-full w-full  flex-col  items-center gap-8  " >
               <HajjUmrahHeroSection title={"journey to the holy cities with us"} titleDes={"Your dream to visit the holy cities of Mecca and Madina is now our responsibility. We ensure that your journey to perform hajj and umrah is smooth and peaceful."} />
               <HajjUmrahPageExplanation />
               {/* {console.log(packageData,"dathuifiuhia")} */}
               <HajjUmrahPackageSection packageData={packageData}/>
               <HajjUmrahServiceSection />
               <HajjUmrahDescriptionSection />
            </div>
         </Layouts>
      </>
   )
}

export default HajjUmrah