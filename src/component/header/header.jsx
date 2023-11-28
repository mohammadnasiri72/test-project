
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
        <div className='header flex items-center sm:justify-around justify-between  bg-slate-600 sm:p-2 px-10 py-2'>
          <div className='flex items-center'>
            <img className='w-10 h-10 object-contain sm:border-r border-black mx-1 cursor-pointer' src={"./images/logo.png"} alt="" />
            <p className='cursor-pointer hidden sm:block hover:bg-slate-300 duration-300 p-1 rounded-lg'>Apex Pioneer group</p>
          </div>
          <div className='hidden sm:block'>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./ABOUT">ABOUT</Link>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./SERVICES">SERVICES</Link>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./CONTACT">CONTACT</Link>
          </div>
          <div className='block sm:hidden'>
            <span onClick={showMenuHandler} className="material-symbols-outlined cursor-pointer hover:bg-slate-300 duration-300 rounded-full p-1">menu</span>
          </div>

        </div>
        <div style={{ transform: showMenu ? "translateX(-100%)" : "translateX(0%)" }} className='fixed sm:hidden w-52 h-screen bg-slate-600 left-full top-0 duration-300 pt-6 pl-3 z-50'>
          <span onClick={() => setShowMenu(!showMenu)} className="material-symbols-outlined cursor-pointer rounded-full hover:bg-slate-300">close</span>
          <div className='flex flex-col items-start'>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./ABOUT">ABOUT</Link>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./SERVICES">SERVICES</Link>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./CONTACT">CONTACT</Link>
            <Link className="p-1 m-1 hover:bg-slate-300 duration-300 rounded-md" to="./Apex">Apex Pioneer group</Link>
            
          </div>
        </div>
        <div onClick={()=> setShowMenu(!showMenu)} style={{display : showMenu? "block" : "none"}} className='fixed top-0 bottom-0 right-0 left-0 z-40 bg-dark'></div>
    </>
  )
}

export default Header