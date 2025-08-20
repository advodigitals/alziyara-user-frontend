import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import SubPageBGImage from '../Components/SubPageBGImage'
import PackageText from '../Components/PackageText'
import PackageMapAll from '../Components/PackageMapAll'
import { handleAllPackageDisplay } from '../api/package/package'


const Packages = () => {
  const [packageData , setPackageData] = useState([])

  useEffect(() => {
    allPackageData()
  },[])

  const allPackageData = async () => {
    const allPackageDataArray = await handleAllPackageDisplay()
    console.log(allPackageDataArray,"first")
    setPackageData(allPackageDataArray?.data)
  }

  console.log("packageData " , packageData);
  return (
    <>
      <Layouts>
        <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center  gap-3 pb-4">
          <SubPageBGImage heading={"Packages"} inputSubHeading={"search the Package"} inputPlaceholder={"Country Name"} />
          <div id="pageText" className="px-4 justify-center text-center sm:mt-5 text-base w-full max-w-[1200px] mx-auto">
           <PackageText/>
          </div>
          <div className=" w-full h-fit flex flex-col items-center justify-center bg-hash-color-bg px-3 py-5 md:py-10 gap-9 ">
            <PackageMapAll packageDataArray={packageData}/>
          </div>
        </div>
      </Layouts>
    </>
  )
}

export default Packages
