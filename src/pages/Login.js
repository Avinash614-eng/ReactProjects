import React from "react";
import loginImage from '../assets/login.png'
 import Templates from '../components/Templates'

//  import setisLoggedIn from '../App'
function Login({setisLoggedIn}){


    return(
      <div  className=" w-full h-screen">

     
        <Templates
        title = "Welcome back"
        desc1 = " Build skills for today,tommorrow and beyond"
        desc2 = "Eduction to future-proof your career"
        image = {loginImage}
        formType = "login" 
        setisLoggedIn = {setisLoggedIn}/>

</div>
    )
 }

export default Login;