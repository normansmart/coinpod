import React, { useState } from "react";
import '../signup.css'

function SignupForm() {

    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const renderErrorMessage = (name) =>
    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>
    // );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('creating user...')

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
              first_name: e.target.first_name.value,
              last_name: e.target.last_name.value
            }),
        })
        // .then((r) => r.json())
        // .then();
    }


  
    return (

        <div className="form">
        <h2 className="title">Sign Up</h2>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        <form className="signup-form" onSubmit={ handleSubmit }>

            <input type="text" name="first_name" required placeholder="First Name"/>
            <input type="text" name="last_name" required placeholder="Last Name"/>
            <input type="text" name="username" required placeholder="Username"/>
            {/* {renderErrorMessage("uname")} */}
            <input type="password" name="password" required placeholder="Password"/>
            {/* {renderErrorMessage("pass")} */}


            <div className="signup-button-container">
                <input type="submit" />
            </div>
        </form>
        </div>
    );
}

export default SignupForm;