import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { myContext } from "../../context"
import { AiOutlineMenu } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';

import mylogo from '../../assets/logo-png.png'
import "./styles.css"


const active = {
    color: 'red'
}
function Nav({children}) {
    const navigate = useNavigate();
    const {
        user,
        setUser,
        showModal,
        setShowModal,
        setLoginModal,
        showMobileMenu,
        setShowMobileMenu } = useContext(myContext)

    function handleLogger() {
        user === "Amaka" ? setUser(null) : setUser("Amaka");
    }
    const notify = () => { toast.success("Logged out successfully")}

    const handleLogout = () => {
        navigate('/')
        setUser(null);
        notify()
    }

    return (
        <div >
            <nav className=" w-screen p-2 overflow-hidden h-16 border-purple-600">
                <div className="flex justify-between items-center">
                    <NavLink to='/'  > <img src={mylogo} alt='Kejepay Logo' className="w-28" /> </NavLink>
                    <div className=" justify-end hidden md:flex gap-4 items-center">
                        {/* {!user && <button className="button" onClick={() => setLoginModal(true)}> Login</button>} */}
                        <NavLink to='/login' >Login </NavLink>
                        {/* {!user &&
                            <button onClick={() => setShowModal(true)}> Register</button>
                        }
                        {user && <NavLink to='dashboard'> Dashboard</NavLink>}
                        {user && <button className="button" onClick={handleLogout}> Logout</button>} */}
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? active : ''} >Dashboard </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? active : ''} >About </NavLink>
                        
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? active : ''}>Logout </NavLink>
                        
                        <Toaster />
                        <button onClick={handleLogger} className={({ isActive }) => isActive ? active : ''}> Logger </button>
                    </div>
                    <i className="md:hidden"> < AiOutlineMenu /></i>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default Nav