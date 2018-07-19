import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export function Login(props) {
  return (
    <div>
      <GoogleLogin
        clientId="755576176377-f7l0sfcelhkh1beo7rjk2ki5g03jrlmk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={props.handleSuccess}
        onFailure={props.handleFailure}
      />
    </div>
  );
}

export function Logout(props) {
  return (
    <GoogleLogout buttonText="Logout" onLogoutSuccess={props.handleLogout} />
  );
}
