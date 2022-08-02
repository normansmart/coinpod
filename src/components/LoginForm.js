

function LoginForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.uname.value)
        console.log(e.target.pass.value)
    };

    const renderForm = (
        <div className="login-form">
        <form onSubmit={ handleSubmit }>
            <div className="login-input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="login-input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="login-button-container">
            <input type="submit" />
            </div>
        </form>
        </div>
    );

    return (
        <div className="login-form">
        <div className="title">Log In</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        { renderForm }
        </div>
    );
}

export default LoginForm;