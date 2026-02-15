import React from "react";
import "./App.css";

function Login({ setIsLoggedIn }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Fact or Quack 🦆</h1>
        <p>Login to start busting myths</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>

        <p className="auth-footer">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

lo
