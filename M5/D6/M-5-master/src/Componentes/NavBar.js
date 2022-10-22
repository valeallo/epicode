import React, { useState, useEffect } from 'react'
import LogoNavbar from '../Assets/Logo.png'
import LoginModal from './LoginModal'

const NavBar = () => {
    const [loginModal, setLoginModal] = useState(false)

    return (
        <nav>
            <div className="flex bg-[#ff0099] p-4 text-white justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={LogoNavbar} width={150} alt="img" />
                    </div>
                    <div>Ciao questo è il mio Blog</div>
                </div>
                <div>
                    <ul className="flex ">
                        <button
                            className="mr-2"
                            onClick={() => {
                                setLoginModal(true)
                            }}
                        >
                            LOGIN
                        </button>
                        <button className="mr-2">LOGOUT</button>
                        <li>Menu 3</li>
                    </ul>
                </div>
            </div>
            {loginModal && <LoginModal close={setLoginModal} />}
        </nav>
    )
}

export default NavBar
