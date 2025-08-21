import React from 'react'
import StarRating from '../Components/StarRating'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router'

const PackageMapAll = ({packageDataArray}) => {

    
    return (
        <>
            {
                packageDataArray.length > 0 && packageDataArray.map((details) => (
                    <div className="w-full max-w-[900px] mx-auto h-fit flex sm:flex-row flex-col bg-white shadow-lg shadow-slate-600/50 rounded-[10px]">
                        <div id="image" alt="" className=" basis-2/5 max-h-[25rem] ">
                            <img src={details.coverImg} alt="" className=" h-full w-full object-cover rounded-[10px] "/>
                        </div>
                        <div id="details" className="flex flex-col items-center justify-center basis-3/5 h-full bg-white sm:rounded-r-[10px] rounded-b-[10px]  p-6 gap-4">
                            <div id="only-text" className="flex w-full h-full flex-col items-start justify-start gap-3 ">
                                <h1 className="text-primary-color text-2xl font-bold">{details.name}</h1>
                                <p className="text-lg font-medium">{details.duration} </p>
                                <p className=""><StarRating rating={details.rating} /></p>
                            </div>
                            <div id="small-text" className="w-full h-full">
                                <p>{details.description}</p>
                            </div>
                            <div id="places" className="w-full h-full flex flex-col items-start gap-3">
                                <h1 className="capitalize text-xl font-semibold text-primary-color">top attractions</h1>
                                <div className="flex flex-col items-start sm:flex-row gap-x-6 gap-y-2 flex-wrap">
                                    {
                                       details.topAttraction && details?.topAttraction.map((points) => (
                                            <div className="flex flex-row justify-center gap-2 items-center">
                                                <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                                <p className='text-sm'>{points}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div id="read-more-btn" className="mt-2">
                                <Link to={`/packages/${details.slug}`} >
                                    <div className="flex  p-2 rounded-[10px] text-white  hover:text-primary-color bg-primary-color hover:bg-white transition-all duration-[0.5s]  shadow-lg shadow-slate-600/50 border border-primary-color" >
                                        <p className="text-lg uppercase font-semibold  ">view details</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default PackageMapAll
