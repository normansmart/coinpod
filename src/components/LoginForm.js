

function LoginForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.uname.value)
        console.log(e.target.pass.value)
    };

    const renderForm = (
        <div className="form">
        <form onSubmit={ handleSubmit }>
            <div className="login-input-container">
          
            <input type="text" name="uname" required  placeholder="Username"/>
            {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="login-input-container">
           
            <input type="password" name="pass" required  placeholder="Password"/>
            {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="login-button-container">
            <input type="submit" />
            </div>
        </form>
        </div>
    );

    return (
        <div className="form">
        <h2 className="title">Log In</h2>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        { renderForm }
        </div>
    );
}

export default LoginForm;