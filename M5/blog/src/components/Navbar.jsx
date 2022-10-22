import React from 'react'
import navbarlogo from "../assets/logo.png"

const Navbar = () => {
  return (
    
        <div className='flex bg-[#ff0099] p-3 text-white justify-between'>
            <div className='flex items-center mr-4'>
                <div>
                    <img src={navbarlogo} width={150}/>
                </div>
                <div>
                    Ciao questo è un blog
                </div>
                
            </div>
            <div>
                <ul className="flex ">
                    <li>menù 1</li>
                    <li>menù 2</li>
                    <li>menù 3</li>
                </ul>
            </div>
        </div>
    
  )
}

export default Navbar