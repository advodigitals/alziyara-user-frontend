import React from 'react'

const AboutCards = () => {
    return (
        <>
            <div className="flex h-[21vh] sm:h-[35vh] text-left w-[18rem]  flex-col items-center justify-center rounded-[10px] pl-[6px] ">

                <div>
                    <h1 className="text-5xl font-bold  text-left text-primary-color">100k+</h1>
                    <h1 className="text-lg  text-left text-third-color">Happy Customers</h1>
                </div>

            </div>
            <div className="flex h-[21vh] sm:h-[35vh] w-[18rem] flex-col items-center  justify-center rounded-[10px] pl-[6px] ">

                <div>
                    <h1 className="text-5xl font-bold text-left text-primary-color">6+</h1>
                    <h1 className="text-lg text-left text-third-color">Branches</h1>
                </div>

            </div>
            <div className="flex h-[21vh] sm:h-[35vh] w-[18rem]  flex-col  items-center justify-center rounded-[10px] pl-[6px] ">

                <div>
                    <h1 className="text-5xl text-left font-bold text-primary-color">9000+</h1>
                    <h1 className="text-lg  text-left text-third-color">Tickets Sold</h1>
                </div>

            </div>
        </>
    )
}

export default AboutCards
