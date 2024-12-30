import "../css/Login.css";

function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-content">
          <form className="login-form" method="Post" >
            <fieldset>
              <legend>Login</legend>
              <div className="form-content">
                <div className="username">
                  <div className="username-label">username</div>
                  <input type="text" name="username" id="username" className="username-in"/>
                </div>
                <div className="password">
                  <div className="password-label">password</div>
                  <input type="password" name="password" id="password" className="password-in"/>
                </div>
                <div className="submit">
                  <input type="submit" name="submit" id="submit" className="submit-btn"/>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
