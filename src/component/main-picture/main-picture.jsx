
import React from 'react'

function MainPicture() {
    return (
        <>
            <div className='main-picture flex items-center h-screen bg-no-repeat bg-cover bg-blend-multiply'>
                <div className='sm:ml-44 ml-0 mx-auto text-center sm:text-start w-full px-5'>
                    <div className='text-white font-bold text-xl'>
                        <p>Distinctive Approach to Real Estate</p>
                        <p>Investment</p>
                        <p>Unlocking Off-Market Opportunities</p>
                    </div>
                    <button className='bg-white rounded-lg duration-300 hover:bg-slate-400 px-5 py-2 mt-2 '>Contact Us Today</button>
                </div>
            </div>
        </>
    )
}

export default MainPicture