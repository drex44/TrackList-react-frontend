import React from "react";

import { Task } from "./tasks";

export class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.task.id,
      status: props.task.status
    };
  }

  handleInputChange = (event, data) => {
    const target = data;
    this.props.handleTasksChange({
      action: "updateStatus",
      id: this.state.id,
      value: target.checked
    });
  };
  handleEditTask = event => {
    this.props.handleTasksChange({
      action: "editTask",
      id: this.state.id,
      value: event
    });
  };
  handleDeleteTask = event => {
    this.props.handleDeleteTask({ action: "deleteTask", id: this.state.id });
  };

  render() {
    return (
      <Task
        {...this.props}
        handleDeleteTask={this.handleDeleteTask}
        handleEditTask={this.handleEditTask}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
