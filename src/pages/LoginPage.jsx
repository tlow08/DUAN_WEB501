// import React from 'react'
// import React from 'react'

function LoginPage() {
  return (
    <div className="container text-center d-flex flex-column login-container">
      <form action="" className="d-flex flex-column login-form">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>
      <div className="login-links">
        <a href="#">Register?</a>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}

export default LoginPage;
