
import React from 'react'

function MainDescription() {
    return (
        <>
            <div className='bg-black sm:h-96 flex justify-center flex-col items-center relative'>
                <img className='w-40 h-40 object-contain absolute opacity-30 top-0 contrast-50' src={"./images/logo.png"} alt="" />
                <p className='text-white z-10 w-5/12 mx-auto text-center'>Discover Apex Pioneer Group, your trusted partner in
                    off-market real estate. Specializing in acquiring properties
                    needing repairs or quick closings, we operate with a unique
                    approach 0% buyers agent commission.</p>
                <p className='text-white z-10 w-5/12 mx-auto mt-3 text-center'>Focused on the Dallas/Fort Worth Metroplex, we actively
                    seek work needed properties. Meet Apex Pioneer Group,
                    our flagship, dedicated to purchasing SFRs and multifamily
                    units.
                </p>
            </div>
        </>
    )
}

export default MainDescription