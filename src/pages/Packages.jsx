import React, { Suspense, useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import SubPageBGImage from '../Components/SubPageBGImage'
import PackageText from '../Components/PackageText'
// import PackageMapAll from '../Components/PackageMapAll'
import { handleAllPackageDisplay, handlePackageSearch } from '../api/package/package'
import { useParams } from 'react-router'
import { ThreeDot } from 'react-loading-indicators'
const PackageMapAll = React.lazy(() => import("../Components/PackageMapAll"))


const Packages = () => {
  const [search, setSearch] = useState('')
  const [packageData , setPackageData] = useState([])

  const { type } = useParams()

  useEffect(() => {
    allPackageData()
    // eslint-disable-next-line 
  },[type])

  useEffect (() => {
    if (search.trim()) {
            PackageDataSearch()
        } else {
          
            allPackageData()
        }
        // eslint-disable-next-line 
  },[search])

  const allPackageData = async () => {
    const allPackageDataArray = await handleAllPackageDisplay(type)
    setPackageData(allPackageDataArray?.data)
  }

  const PackageDataSearch = async () => {
    const PackageDataArray = await handlePackageSearch(search)
    setPackageData(PackageDataArray?.data)
  }





  return (
    <>
      <Layouts page={"Packages"} >
        <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center  gap-3 pb-4">
          <SubPageBGImage heading={"Packages"} inputSubHeading={"search the Package"} inputPlaceholder={"Country Name"} setSearch={setSearch} />
          <div id="pageText" className="px-4 justify-center text-center sm:mt-5 text-base w-full container mx-auto">
           <PackageText/>
          </div>
           <Suspense fallback={<div className="flex w-full h-[100vh] justify-center items-center capitalize gap-5 "  ><ThreeDot variant="bounce" color="#00b372" size="medium" text="Loading" textColor="#000000" /></div>}>
          <div  className=" w-full h-fit flex flex-col items-center justify-center bg-hash-color-bg px-3 py-5 md:py-10 gap-9 ">
            <PackageMapAll packageDataArray={packageData}/>
          </div>
          </Suspense>
        </div>
      </Layouts>
    </>
  )
}

export default Packages


