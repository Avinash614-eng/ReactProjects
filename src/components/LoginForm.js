import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible , AiFillEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
const LoginForm = ({setisLoggedIn })=>{
     
    
    const navigate = useNavigate();

    const [showPassword,setshowPassword] = useState(false);
    const [formData,setFormData] = useState({email:"",password:""})

    const changeHandler = (event)=>{

        setFormData((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
           
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(

        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
        
        >

            <label className="w-full">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]" >Email Address 
                <sup className="text-pink-300"> *</sup></p>
                <input 
                required
                type="text"
                name = "email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={changeHandler}
                className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white "
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">Password 
                <sup className="text-pink-300">*</sup></p>
                <input 
                required
                type={ showPassword ? "text" : "password"}
                name = "password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={changeHandler}
                className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] "
                />
            
            <span onClick = {()=> 
                           setshowPassword((prev) => !(prev)) }
                           className="absolute right-3 top-[42px] cursor-pointer"
                           >
                {(showPassword) ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiFillEye fontSize={24} fill="#AFB2BF"/>)}
            </span>

            <Link to = "#">
                <p className="max-w-max text-xs mt-1 text-blue-400 ml-auto">
                    Forgot Password
                </p>
            </Link>
    </label>

    <button className="bg-yellow-200 rounded-[8px] font-medium text-black-500 py-[8px] px-[12px] mt-6">
        Sign In
    </button>



        </form>
    )
}
export default LoginForm;