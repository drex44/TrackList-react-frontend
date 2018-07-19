import React from "react";
import { profileOperations } from "../../modules/ducks/profile";
import { Login, Logout } from "../views/googleAuth";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  handleLoginSuccess = response => {
    console.log(response);

    this.props.login({
      ...response.profileObj,
      tokenId: response.tokenId
    });
  };

  handleLogout = response => {
    this.props.logout();
  };

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return this.props.button === "login" ? (
      <Login
        handleSuccess={this.handleLoginSuccess}
        handleFailure={this.responseGoogle}
      />
    ) : this.props.button === "logout" ? (
      <Logout handleLogout={this.handleLogout} />
    ) : (
      <div />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: profile => dispatch(profileOperations.login(profile)),
    logout: () => dispatch(profileOperations.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleAuth);
