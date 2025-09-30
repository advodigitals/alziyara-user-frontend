import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import { handleSinglePackage } from '../api/package/package'
import PackageHeroDataSection from '../Components/PackageHeroDataSection'
import PackageRestDataSection from '../Components/PackageRestDataSection'
import PackageDescriptionDataSection from '../Components/PackageDescriptionDataSection'
import PackageIncludesAndExcludesDataSection from '../Components/PackageIncludesAndExcludesDataSection'
import PackageItneryDataSection from '../Components/PackageItneryDataSection'
// import image from '../Assets/test.jpg'

const PackageIndividualPage = () => {
    const [packageData, setPackageData] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const allPackageData = async () => {
            const allPackageDataArray = await handleSinglePackage(name)
            setPackageData(allPackageDataArray?.data)
        }
        allPackageData()
    }, [name])

    // const allPackageData = async () => {
    //     const allPackageDataArray = await handleSinglePackage(name)
    //     setPackageData(allPackageDataArray?.data)
    // }


    return (
        <>
            <Layouts>
                <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col pb-10 gap-8">
                    <PackageHeroDataSection packageData={packageData} />
                    <div id="image-section" className="flex w-full  h-[30rem] ">
                        <img src={packageData.coverImg} alt="" className='h-full w-full object-cover ' />
                    </div>
                    <div id="remaining-details-section" className="flex h-fit w-full max-w-[1200px] mx-auto md:flex-row flex-col pt-10 p-2">
                        <div className="flex h-full basis-1/2 flex-col gap-5 ">
                            <PackageRestDataSection packageData={packageData} />
                            <hr className='border-[3px_solid_#9d9d9d] mx-6 my-8' />
                            <PackageDescriptionDataSection packageData={packageData} />
                            <PackageIncludesAndExcludesDataSection packageDataDetails={packageData.inclusion} packageDataDetailsHeading={"includes"} />
                            <PackageIncludesAndExcludesDataSection packageDataDetails={packageData.exclusion} packageDataDetailsHeading={"excludes"} />
                        </div>
                        <PackageItneryDataSection packageData={packageData} />
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default PackageIndividualPage
