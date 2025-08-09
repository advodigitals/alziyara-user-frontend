import React from 'react'
import VisaBg from '../Assets/images/visabg.jpg'
const VisaBGImage = (props) => {
  const setSearch =  props.setSearch

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div id="img" className="w-full h-[28rem]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${VisaBg})` }}>
                <div className="w-full h-full flex justify-center items-center flex-col gap-10  bg-black bg-opacity-50">
                    <h1 className="text-7xl font-bold text-white text-center">{props.heading}</h1>
                    <div id="search-input" className="px-2 w-fit flex flex-col ">
                        <label className="capitalize text-base font-medium text-white text-start">search the country</label>
                        <input type="text"   placeholder='Country Name' className='w-[19rem] h-[3rem] p-3 rounded-[10px] border-none outline-none text-start ' onChange={handleSearchInput}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaBGImage
// onChange={(e) => setSearch(e.target.value)}