import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import {
  Checkbox,
  Grid,
  Segment,
  Divider,
  Button,
  Icon,
  Modal,
  Form,
  TextArea,
  Flag,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import {
  Description,
  Title,
  ProgressBar,
  PreventEnterSubmit,
  Tags,
  ConfirmationModal
} from "./common";

export class CList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.list.tasks
    };
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleNewTaskRequest = this.handleNewTaskRequest.bind(this);
  }

  handleTasksChange(event) {
    let tasks = this.state.tasks.map(task => {
      if (task.id === event.id) {
        task.status = event.value;
        return task;
      } else {
        return task;
      }
    });

    this.setState({
      tasks: tasks
    });
  }

  handleNewTaskRequest(event) {
    let newTask = {
      id: this.state.tasks.length + 1,
      title: event.title,
      description: event.desc,
      status: false
    };

    let newArray = this.state.tasks.slice();
    newArray.push(newTask);
    this.setState({ tasks: newArray });
  }

  render() {
    const list = this.props.list;

    const tasks = this.state.tasks;
    const totaltasks = tasks.length;
    let count = 0;
    tasks.map(task => (task.status ? count++ : count));
    const completedTasks = count;

    return (
      <div>
        <Grid>
          <Grid.Column width={14}>
            <Title size="medium" value={list.title} />
            <Description value={list.description} />
            <Tags value={list.tags} />
            {/* <Flag name="ae" /> */}
          </Grid.Column>
          <Grid.Column width={2}>
            <Link to={{ pathname: "/editList/" + list.id }}>
              {" "}
              <Button
                basic
                floated="right"
                icon="edit"
                iconPosition="right"
                content="Edit"
              />{" "}
            </Link>
            {/* <Button
              basic
              floated="right"
              icon="delete"
              iconPosition="right"
              content="Delete"
              onClick={() => this.props.handleDeleteList(list.id)}
            /> */}
            <ConfirmationModal
              button={
                <Button
                  basic
                  floated="right"
                  icon="delete"
                  iconPosition="right"
                  content="Delete"
                />
              }
              confirmButtonText="Yes, delete"
              message="are you sure, you want to delete this TrackList?"
              action={this.props.handleDeleteList}
              value={list.id}
            />
          </Grid.Column>
        </Grid>
        <Divider section />

        <Tasks
          isUserList={this.props.isUserList}
          newTaskLabel="Add new task"
          editable={this.props.editable}
          tasks={tasks}
          handleTasksChange={this.handleTasksChange}
          handleNewTaskRequest={this.handleNewTaskRequest}
        />

        <Divider hidden />
        {/* <ProgressBar value={completedTasks} total={totaltasks} /> */}
      </div>
    );
  }
}

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.task.id,
      status: props.task.status
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleInputChange(event, data) {
    const target = data;
    this.props.handleTasksChange({
      action: "updateStatus",
      id: this.state.id,
      value: target.checked
    });
  }
  handleEditTask(event) {
    this.props.handleTasksChange({
      action: "editTask",
      id: this.state.id,
      value: event
    });
  }
  handleDeleteTask(event) {
    this.props.handleDeleteTask({ action: "deleteTask", id: this.state.id });
  }

  render() {
    const status = this.props.task.status;
    const title = this.props.task.title;
    const desc = this.props.task.description;

    return (
      <Grid>
        {this.props.isUserList ? (
          <Grid.Column width={1}>
            <Checkbox
              type="checkbox"
              name="status"
              checked={status}
              onChange={this.handleInputChange}
            />
          </Grid.Column>
        ) : null}
        <Grid.Column width={10}>
          <Title size="small" value={title} />
          <Description value={desc} />
        </Grid.Column>
        {this.props.editable ? (
          <Grid.Column>
            <NewTaskModal
              submitLabel="Submit"
              handleTaskSubmit={this.handleEditTask}
              task={this.props.task}
              button={<Button basic icon="edit" />}
              label="Edit"
            />
            <Button basic icon="delete" onClick={this.handleDeleteTask} />
          </Grid.Column>
        ) : null}
      </Grid>
    );
  }
}

class Tasks extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <Grid container columns={1} doubling stackable>
        {tasks.map(task => (
          <Grid.Column key={task.id.toString()}>
            <Segment color="green">
              <Task
                isUserList={this.props.isUserList}
                editable={this.props.editable}
                task={task}
                handleDeleteTask={this.props.handleDeleteTask}
                handleTasksChange={this.props.handleTasksChange}
              />
            </Segment>
          </Grid.Column>
        ))}
        {this.props.editable ? (
          <Grid.Column>
            <Segment>
              <NewTaskModal
                submitLabel="Add"
                label={this.props.newTaskLabel}
                handleTaskSubmit={this.props.handleNewTaskRequest}
              />
            </Segment>
          </Grid.Column>
        ) : null}
      </Grid>
    );
  }
}

class NewTaskModal extends Component {
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

class TaskForm extends Component {
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
export class ListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      tags: [],
      tagOptions: [],
      tasks: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleNewTaskRequest = this.handleNewTaskRequest.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.list && !state.title) {
      const list = props.list;
      return {
        title: list.title,
        desc: list.description,
        tags: list.tags,
        tagOptions: list.tags.map(value => ({ text: value, value })),
        tasks: list.tasks
      };
    }
    return null;
  }

  handleTasksChange(event) {
    // console.log(event)
    if (event.action === "updateStatus") {
      let tasks = this.state.tasks.map(task => {
        if (task.id === event.id) {
          task.status = event.value;
          return task;
        } else {
          return task;
        }
      });

      this.setState({
        tasks: tasks
      });
    } else if (event.action === "editTask") {
      let tasks = this.state.tasks.map(task => {
        if (task.id === event.id) {
          task.title = event.value.title;
          task.description = event.value.desc;
          return task;
        } else {
          return task;
        }
      });

      this.setState({
        tasks: tasks
      });
    }
  }

  handleDeleteTask(event) {
    if (event.action === "deleteTask") {
      let tasks = this.state.tasks;
      let index = -1;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === event.id) {
          index = i;
        }
      }
      if (index >= 0) {
        tasks.splice(index, 1);
      }
      this.setState({
        tasks: tasks
      });
    }
  }

  handleNewTaskRequest(event) {
    let newTask = {
      id: this.state.tasks.length + 1,
      title: event.title,
      description: event.desc,
      status: false
    };

    let newArray = this.state.tasks.slice();
    newArray.push(newTask);
    this.setState({ tasks: newArray });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "tags") {
      value = value.split(",");
    }

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    const list = {
      id: this.props.list ? this.props.list.id : null,
      title: this.state.title,
      description: this.state.desc,
      tags: this.state.tags,
      tasks: this.state.tasks
    };
    let res = await this.props.handleListSubmit(list);
    event.preventDefault();
  }

  handleReset = event => {
    this.setState({
      title: "",
      desc: "",
      tags: [],
      tagOptions: [],
      tasks: []
    });
    event.preventDefault();
  };

  handleTagsAddition = (e, { value }) => {
    this.setState({
      tagOptions: [{ text: value, value }, ...this.state.tagOptions]
    });
  };

  handleTagsChange = (e, { value }) => this.setState({ tags: value });

  render() {
    const title = this.state.title;
    const description = this.state.desc;
    const tags = this.state.tags;
    const tasks = this.state.tasks;

    const currentValues = this.state.tags;

    return (
      <Form>
        <PreventEnterSubmit>
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
            name="desc"
            control={TextArea}
            value={description}
            label="Description"
            placeholder="Tell us more about the list..."
            onChange={this.handleInputChange}
          />
          <Form.Field>
            <label>Tags</label>
            <Dropdown
              options={this.state.tagOptions}
              placeholder="Tags"
              search
              selection
              fluid
              multiple
              allowAdditions
              value={currentValues}
              onAddItem={this.handleTagsAddition}
              onChange={this.handleTagsChange}
            />
          </Form.Field>

          <Divider hidden />

          <Form.Field>
            <label>Tasks</label>
            <Tasks
              editable={this.props.editable}
              newTaskLabel="Add new task"
              tasks={tasks}
              handleDeleteTask={this.handleDeleteTask}
              handleTasksChange={this.handleTasksChange}
              handleNewTaskRequest={this.handleNewTaskRequest}
            />
          </Form.Field>
        </PreventEnterSubmit>

        <Divider hidden />

        <Button
          negative
          icon="repeat"
          labelPosition="right"
          content="Clear"
          onClick={this.handleReset}
        />
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          type="submit"
          content="Submit"
          onClick={this.handleSubmit}
        />
      </Form>
    );
  }
}
