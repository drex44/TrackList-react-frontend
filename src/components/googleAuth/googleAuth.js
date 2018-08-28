import React from "react";
import Config from "../../config";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button } from "semantic-ui-react";

export function Login(props) {
  return (
    <div>
      <GoogleLogin
        clientId={Config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={props.handleSuccess}
        onFailure={props.handleFailure}
        render={props => (
          <Button basic onClick={props.onClick}>
            Login with Google
          </Button>
        )}
      />
    </div>
  );
}

export function Logout(props) {
  return (
    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={props.handleLogout}
      render={props => (
        <div basic onClick={props.onClick}>
          Logout
        </div>
      )}
    />
  );
}
