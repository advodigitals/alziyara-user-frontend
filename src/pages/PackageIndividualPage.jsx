import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import { handleAllPackageDisplay } from '../api/package/package'

const PackageIndividualPage = () => {
    const [packageData , setPackageData] = useState([])
    const { slug } = useParams()

    useEffect (() => {
        allPackageData()
    },[])

    const allPackageData = async () => {
        const allPackageDataArray = await handleAllPackageDisplay(slug)
        setPackageData(allPackageDataArray?.data)
    }
    return (
        <>
            <Layouts>
                <div className="flex">
                    <h1>Package details {slug}</h1>
                </div>
            </Layouts>
        </>
    )
}

export default PackageIndividualPage
