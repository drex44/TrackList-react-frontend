import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import { Header, Progress, Icon, Confirm } from "semantic-ui-react";

export function Title(props) {
  return <Header size={props.size}>{props.value}</Header>;
}
export function Description(props) {
  return <div> {props.value} </div>;
}
export function Tags(props) {
  return (
    <div>
      {props.value && props.value.map(tag => <span key={tag}>#{tag} </span>)}
    </div>
  );
}
export function ProgressBar(props) {
  return (
    <Progress
      indicating
      value={props.value}
      total={props.total}
      progress="ratio"
    />
  );
}

export function PreventEnterSubmit(props) {
  return (
    <div
      onKeyPress={e => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      {props.children}
    </div>
  );
}

export function StyledIcon(props) {
  return <Icon bordered color="teal" size="large" name={props.name} />;
}

export class ConfirmationModal extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => {
    this.setState({ open: false });
    this.props.action(this.props.value);
  };
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <div onClick={this.show}> {this.props.button} </div>
        {/* <Button onClick={this.show}>Show</Button> */}
        <Confirm
          open={this.state.open}
          content={this.props.message}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          cancelButton="Nope"
          confirmButton={this.props.confirmButtonText}
        />
      </div>
    );
  }
}
