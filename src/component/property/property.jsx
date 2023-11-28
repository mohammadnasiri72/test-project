import React from 'react'

function Property() {

  return (
    <>
    <div className="bg-black flex flex-col items-center justify-center pt-5">
          <h2 className="text-white text-xl font-bold">Property Acquisition Focus</h2>
          <div className="flex flex-col sm:flex-row justify-center mt-3 py-10">
            <div className="img-focus-box1 bg-no-repeat bg-cover w-44 h-72 bg-center bg-blend-multiply mx-3 flex justify-center items-end relative cursor-pointer duration-300">
              <p className="text-sm text-img-focus text-white text-center w-7/12 absolute mx-auto duration-300 sm:opacity-0">Specializing in dated/distressed properties</p>
            </div>
            <div className="img-focus-box2 bg-no-repeat bg-cover w-44 h-72 bg-center bg-blend-multiply mx-3 flex justify-center items-end relative mt-10 sm:mt-0 cursor-pointer duration-300">
              <p className="text-sm text-img-focus text-white text-center w-9/12 absolute mx-auto duration-300 sm:opacity-0">Willingness to consider properties in any condition</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap justify-center px-10 py-5">
            <div className="flex flex-col justify-center items-center sm:border-r sm:border-b-0 border-b mt-4 border-white md:w-1/3 sm:w-1/2 w-full pb-4 cursor-pointer hover:bg-slate-950 duration-300">
              <span className="material-symbols-outlined text-white text-5xl mt-2">delete_history</span>
              <p className="text-white">Efficient Offer Process</p>
              <span className="material-symbols-outlined text-white">arrow_drop_down</span>
              <p className="text-white w-2/3 text-center">Same day offers upon receiving property information</p>
            </div>
            <div className="flex flex-col justify-center items-center md:border-r sm:border-b-0 border-b mt-4 border-r-0 border-white md:w-1/3 sm:w-1/2 w-full pb-4 cursor-pointer hover:bg-slate-950 duration-300">
              <span className="material-symbols-outlined text-white text-5xl mt-2">diversity_2</span>
              <p className="text-white">Financial Flexibility</p>
              <span className="material-symbols-outlined text-white">arrow_drop_down</span>
              <p className="text-white w-2/3 text-center">Cash transactions with no financing contingency</p>
            </div>
            <div className="flex flex-col justify-center items-center  md:border-none sm:border-b-0 border-b mt-4 sm:border-r border-white md:w-1/3 sm:w-1/2 w-full pb-4 cursor-pointer hover:bg-slate-950 duration-300">
              <span className="material-symbols-outlined text-white text-5xl mt-2">timer</span>
              <p className="text-white">Speedy Closings</p>
              <span className="material-symbols-outlined text-white">arrow_drop_down</span>
              <p className="text-white w-2/3 text-center">Ability to close deals in as little as 7 days</p>
            </div>
            <div className="flex flex-col justify-center items-center border-white md:w-1/3 sm:w-1/2 w-full mt-4 pb-4 cursor-pointer hover:bg-slate-950 duration-300">
              <span className="material-symbols-outlined text-white text-5xl mt-2">animation</span>
              <p className="text-white">Cost Transparency</p>
              <span className="material-symbols-outlined text-white">arrow_drop_down</span>
              <p className="text-white w-2/3 text-center">No fees for sellers, including no buyer's agent commission.</p>
            </div>
          </div>
          <div className="closing-costs flex items-center justify-center mt-56 overflow-hidden">
          <img className="w-full object-cover img-closing-costs brightness-50" src={"./images/Middel image.jpg"} alt="" />
          <p className="absolute text-closing-costs text-white sm:text-3xl font-bold w-full mx-auto text-center">All closing costs covered by buyer</p>
        </div>
        </div>
    </>
  )
}

export default Property