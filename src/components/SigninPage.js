import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import '../signup.css'



const SigninPage = () => {


    

    return (

        <>
            <div className="signin-signup">
                
                <div className="form-container">
                    <LoginForm />
                </div>

                <div className="form-container">
                    <SignupForm />
                </div>
            </div>

        </>

    )



}


export default SigninPage