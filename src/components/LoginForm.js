

function LoginForm({ onLogin, currentUserId }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('logging in...')
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value
            }),
        })
        .then(res => res.json())
        .then((user) => {
            // console.log(user.id)
            if (user.id) {
                onLogin(user.id)
            }
        })
    };

    const renderForm = (
        <div className="form">
            <form onSubmit={ handleSubmit }>
                <div className="login-input-container">
                    <input type="text" name="username" required  placeholder="Username"/>
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="login-input-container">
                    <input type="password" name="password" required  placeholder="Password"/>
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="login-button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    if (!currentUserId) {
        return (
            <div className="form">
            <h2 className="title">Log In</h2>
            {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
            { renderForm }
            </div>
        );
    }
}

export default LoginForm;