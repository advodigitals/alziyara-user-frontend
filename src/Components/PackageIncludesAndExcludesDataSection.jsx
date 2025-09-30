import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const PackageIncludesDataSection = ({ packageDataDetails , packageDataDetailsHeading }) => {
    return (
        <>
            <div className="w-full flex flex-col p-2 gap-3">
                <h1 className="text-black text-3xl font-semibold capitalize">{packageDataDetailsHeading} <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                {
                    packageDataDetails && packageDataDetails.map((points) => (
                        <div className=" flex flex-row justify-start items-center gap-3">
                            <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                            <p className="text-base font-normal text-third-color">{points}</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default PackageIncludesDataSection


