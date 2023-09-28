import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';
function Navbar(props) {

    const isLoggedIn = props.isLoggedIn;
    const setisLoggedIn = props.setisLoggedIn;

    return (
        <div className="flex justify-between w-11/12 max-w-[1100px] py-4 mx-auto">
            <Link to='/'>
                <img src={logo} alt="LOgo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="text-gray-50 flex gap-3" >
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>


                    <li>
                        <NavLink to='/'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Contact</NavLink>
                    </li>
                </ul>

            </nav>



            {/* Login - SignUp - LogOut - Dashboard */}
            <div className="flex items-center gap-4">
                {!isLoggedIn &&
                    <Link to='/login'>
                        <button className="text-gray-50 bg-gray-950 py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">Log in</button>
                    </Link>
                }


                {!isLoggedIn &&
                    <Link to='/signup'>
                        <button className="text-gray-50 bg-gray-950 py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">
                            signup
                        </button>
                    </Link>
                }


                {  isLoggedIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setisLoggedIn(false)
                            toast.success('Logged Out')
                        }} className="text-gray-50 bg-gray-950 py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">
                            Logout
                        </button>
                    </Link>
                }


                {isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className="text-gray-50 bg-gray-950 py-[8px] px-[12px] rounded-[8px] border border-blue-700 ">
                            Dashboard
                        </button>
                    </Link>
                }

            </div>



        </div>
    )
}

export default Navbar;