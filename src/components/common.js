import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Header, Progress, Icon } from "semantic-ui-react";

export function Title(props) {
  return <Header size={props.size}>{props.value}</Header>;
}
export function Description(props) {
  return <div> {props.value} </div>;
}
export function Tags(props) {
  return <div>{props.value.map(tag => <span>#{tag} </span>)}</div>;
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
