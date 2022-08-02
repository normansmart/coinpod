import React, { useState } from "react";


function SignupForm() {

    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const renderErrorMessage = (name) =>
    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>
    // );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.uname.value)
        console.log(e.target.pass.value)
    };

    const renderForm = (
        <div className="signup-form">
        <form onSubmit={ handleSubmit }>
            <div className="signup-input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="signup-input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="signup-button-container">
            <input type="submit" />
            </div>
        </form>
        </div>
    );

    return (
        <div className="login-form">
        <div className="title">Sign Up</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        { renderForm }
        </div>
    );
}

export default SignupForm;