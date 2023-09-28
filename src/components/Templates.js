import React from "react";
import frameImage from '../assets/frame.png'
import SignUp from './SignUp'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

function Templates({title,desc1,desc2,setisLoggedIn,formType,image,setisLoggein}){

    // console.log("ye rha mera form type");
    // console.log(formType)
    return(
        <div className="flex w-full max-w-[1100px] h-full py-12 mx-auto gap-x-12 gap-y-0 justify-between">
            <div className="w-11/12 max-w-[450px] h-full mx-0">
               <h1
               className="text-slate-50 font-semibold text-[1.87rem]"
               >{title}</h1>

                <p className="text = [1.125rem] leading[1.625rem] mt-4 ">
                <span className="text-slate-100">{desc1}</span> <br />
                <span className="text-blue-400">{desc2}</span>
                </p>

                {formType==="signup" ? (<SignUp setisLoggedIn={setisLoggedIn}/>) : (<LoginForm setisLoggedIn={setisLoggedIn}/>)}

                <div className="flex w-full items-center my-4 gap-x-2 ">
                    <div className="h-[2px] bg-slate-800 w-1/2"></div>
                    
                    <p className="text-slate-100 font-medium leading[1.375]">
                    OR
                    </p>
                    <div className="h-[2px] bg-slate-800 w-1/2"></div>
                </div>
{/*  */}
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-gray-100
                border border-slate-700 px-[12] py-[8px] gap-x-2 mt-6 ">
                <FcGoogle/>
                    <p>Sign Up with Google </p>
                </button>

                </div>

                <div className=" w-11/12 max-w-[450px]">

                    <img src={frameImage} alt="frameimage"
                    width={558} 
                    height ={504}
                    loading = "lazy"/>

                   <img src={image} alt="formImage"
                    width={448} 
                    height ={504}
                    loading = "lazy"
                    className="absolute top-[110px] right-[205px]"  />
                </div>

        </div>
    )
}

export default Templates;