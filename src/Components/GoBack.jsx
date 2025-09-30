import React from 'react'
import { Link, useNavigate } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const GoBack = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-fit h-fit bg-primary-color fixed left-8  top-[165px] rounded-[50%] z-50 md:visible invisible cursor-pointer hover:text-primary-color text-white hover hover:bg-white transition-all duration-[0.5s]  shadow-lg shadow-slate-600/50 border border-primary-color">
                <Link onClick={() => navigate(-1)} className=''><Icon icon="humbleicons:arrow-go-back" width="40" height="40" className='m-2' /></Link>
            </div>
        </>
    )
}

export default GoBack
