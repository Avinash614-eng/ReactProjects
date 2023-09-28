import React from "react";
import signUpimage from '../assets/signup.png'
import Templates from "../components/Templates";


function Signup({ setisLoggedIn }) {
    return (
        <div >
            <Templates

                title="join millions learning to code with StudyNotion"
                desc1="Build skills for today,tommorrow and beyond"
                desc2="Eduction to future-proof your career"
                image={signUpimage}
                formType="signup"
                setisLoggedIn={setisLoggedIn}
            />
        </div>


    )
}

export default Signup