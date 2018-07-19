import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Button, Modal } from "semantic-ui-react";
import GoogleAuth from "../viewController/googleAuth";

export class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
  }

  open(event) {
    this.setState({
      open: true
    });
  }

  close(event) {
    this.setState({
      open: false
    });
  }

  handleTaskSubmit(event) {
    this.props.handleTaskSubmit(event);
    this.close();
  }

  render() {
    const button = this.props.button ? (
      <div onClick={this.open}> {this.props.button} </div>
    ) : (
      <Button basic fluid onClick={this.open}>
        Login
      </Button>
    );

    const open = this.state.open;

    return (
      <div>
        {button}
        <Modal
          closeIcon
          open={open}
          closeOnEscape={true}
          closeOnRootNodeClick={true}
          onClose={this.close}
        >
          <Modal.Header>Login/Signup</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <GoogleAuth button="login" />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
