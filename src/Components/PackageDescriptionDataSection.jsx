import React from 'react'

const PackageDescriptionDataSection = ({ packageData }) => {
    return (
        <>
            <div className="text-third-color px-2 font-normal text-base">
                <p className="">{packageData.longDescription}</p>
            </div>
        </>
    )
}

export default PackageDescriptionDataSection
