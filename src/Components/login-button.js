import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Style/desktop.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      id="login-btn"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;