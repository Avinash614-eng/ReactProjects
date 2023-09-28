import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"



function SignUp({ setisLoggedIn }) {
    const navigate = useNavigate();


    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", ConfirmPassword: "" });

    const changeHandler = (event) => {

        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const [accountType,setaccountType] = useState("student");




    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.ConfirmPassword) {
            toast.error("Passwords do not match");
            return;
        }


        setisLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing account data ");
        console.log(finalData);

        navigate("/dashboard");
    }

 



    return (

        <div>
            {/* instructor & student */}
            <div className="flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
            <button
              className={`${accountType === "student" ? "bg-slate-900 text-slate-50" : "bg-transparent text-red-200"} py-2 px-5 
              rounded-full transition-all duration-200`}
             onClick={ () => setaccountType("student")}
            >Student</button>


            <button
            className={`${accountType === "Instructor" ? "bg-slate-900 text-slate-50" : "bg-transparent text-red-200"}
             py-2 px-5 rounded-full transition-all duration-200`}

            onClick={ () => setaccountType("Instructor")}
                >Instructor</button>
            
            </div>
           

            <form onSubmit={submitHandler}>
                {/* first and last name */}
                <div className="flex justify-between  ">
                    <label >
                        <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">First Name<sup  className="text-pink-300">*</sup></p>

                        <input type="text"
                            placeholder="Firstname"
                            name='firstName'
                            value={FormData.firstName}
                            onChange={changeHandler} 
                            className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white "/>
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">Last Name<sup  className="text-pink-300">*</sup></p>
                        <input type="text"
                            placeholder="Lastname"
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler} 
                            className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white "/>
                    </label>
                </div>

                {/* email  */}
                <label>
                    <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">Email Address
                    <sup  className="text-pink-300">*</sup></p>
                    <input type="email"
                        placeholder="Email"
                        name='email'
                        value={formData.email}
                        onChange={changeHandler} 
                        className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white "/>
                </label>

                {/* password */}
                <div className="flex justify-between">

                
                <label>
                    <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]"> 
                    Create Password <sup  className="text-pink-300">*</sup></p>
                    <div className="relative">

                    
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={changeHandler}
                        className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white "
                    />

                    <span onClick={() =>
                        setshowPassword((prev) => !(prev))}
                        className="absolute right-3 top-[15px] cursor-pointer">
                        {(showPassword) ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiFillEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    </div>
                </label>



                {/* confirm password */}
                <label >
                    <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]"> 
                    Confirm Password <sup  className="text-pink-300">*</sup></p>
                    <div className="relative">

                    <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name="ConfirmPassword"
                        placeholder="Confirm password"
                        value={formData.ConfirmPassword}
                        onChange={changeHandler}
                        className="bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px] outline-white  "
                    />

                    <span onClick={() =>
                        setshowConfirmPassword((prev) => !(prev))}
                        className="absolute right-3 top-[15px] cursor-pointer">
                        {(showConfirmPassword) ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiFillEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    </div>
                </label>
             </div>

                <button className=" w-full bg-yellow-200 rounded-[8px] font-medium text-black-500 py-[8px] px-[12px] mt-6">
                    Create Account
                </button>

            </form>


        </div>
    )
}

export default SignUp;