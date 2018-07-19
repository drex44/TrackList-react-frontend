import React from "react";

import "semantic-ui-css/semantic.min.css";
import {
  Checkbox,
  Grid,
  Segment,
  Button,
  Icon,
  Modal,
  Form,
  TextArea
} from "semantic-ui-react";

import { Description, Title } from "../common";
import { TaskContainer } from "./tasksContainer";

export function Tasks(props) {
  return (
    <Grid container columns={1} doubling stackable>
      {props.tasks.map(task => (
        <Grid.Column key={task.id.toString()}>
          <Segment color="green">
            <TaskContainer
              isPrivateList={props.isPrivateList}
              editable={props.editable}
              task={task}
              handleDeleteTask={props.handleDeleteTask}
              handleTasksChange={props.handleTasksChange}
            />
          </Segment>
        </Grid.Column>
      ))}
      {props.editable ? (
        <Grid.Column>
          <Segment>
            <NewTaskModal
              submitLabel="Add"
              label={props.newTaskLabel}
              handleTaskSubmit={props.handleNewTaskRequest}
            />
          </Segment>
        </Grid.Column>
      ) : null}
    </Grid>
  );
}

export function Task(props) {
  return (
    <Grid>
      {props.isPrivateList ? (
        <Grid.Column width={1}>
          <Checkbox
            type="checkbox"
            name="status"
            checked={props.task.status}
            onChange={props.handleInputChange}
          />
        </Grid.Column>
      ) : null}
      <Grid.Column width={10}>
        <Title size="small" value={props.task.title} />
        <Description value={props.task.description} />
      </Grid.Column>
      {props.editable ? (
        <Grid.Column>
          <NewTaskModal
            submitLabel="Submit"
            handleTaskSubmit={props.handleEditTask}
            task={props.task}
            button={<Button basic icon="edit" />}
            label="Edit"
          />
          <Button basic icon="delete" onClick={props.handleDeleteTask} />
        </Grid.Column>
      ) : null}
    </Grid>
  );
}

class NewTaskModal extends React.Component {
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
      <Button basic fluid animated="fade" onClick={this.open}>
        <Button.Content hidden>{this.props.label}</Button.Content>
        <Button.Content visible>
          <Icon name="plus" />
        </Button.Content>
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
          <Modal.Header>Add new task</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <TaskForm
                submitLabel={this.props.submitLabel}
                task={this.props.task}
                handleTaskSubmit={this.handleTaskSubmit}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    const task = this.props.task;
    this.state = {
      title: task ? task.title : "",
      desc: task ? task.description : ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleTaskSubmit(this.state);
  }

  render() {
    const title = this.state.title;
    const desc = this.state.desc;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field
          control={TextArea}
          value={desc}
          name="desc"
          label="Description"
          placeholder="Tell us more about the task..."
          onChange={this.handleInputChange}
        />
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content={this.props.submitLabel}
        />
      </Form>
    );
  }
}
