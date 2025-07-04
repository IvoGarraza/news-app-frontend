import React from 'react'
import AddNews from '../Buttons/AddNews/AddNews'

const Layout = () => {
  return (
    <nav class="navbar fixed bg-red-500 h-24 z-50 w-full flex flex-row justify-between items-center font-poppins">
        <div>
            <span className="title-navbar font-bold text-white text-4xl ml-12 cursor-pointer">MFNews</span>
        </div>
        <div>
            <AddNews></AddNews>
        </div>
    </nav>
  )
}

export default Layout