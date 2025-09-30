import React from 'react'
import VisaBg from '../Assets/images/visabg.jpg'
const VisaBGImage = ({ setSearch, heading ,inputSubHeading , inputPlaceholder }) => {

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div id="img" className="w-full  h-fit bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${VisaBg})` }}>
                <div className="w-full  h-full   bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="w-full max-w-[1100px]  h-full flex justify-center items-center flex-col py-8  gap-6 md:gap-0 md:flex-row md:justify-between md:px-4 px-0 ">
                        <h1 className="text-6xl font-bold text-white text-center">{heading}</h1>
                        <div id="search-input" className="px-2 w-fit flex flex-col ">
                            <label className="capitalize text-base font-medium text-white text-start">{inputSubHeading}</label>
                            <input type="text" placeholder={inputPlaceholder} className='w-[19rem] h-[40px] p-3 rounded-[10px] border-none outline-none text-start ' onChange={(e) => handleSearchInput(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaBGImage
