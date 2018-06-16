import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Header, Checkbox, Grid, Segment, Progress, Divider, Button, Icon, Modal, Form, TextArea, Flag } from 'semantic-ui-react';


export class CList extends Component{
    constructor(props){
      super(props);
      this.state = {
        tasks : props.list.tasks
      }

      this.handleTasksChange = this.handleTasksChange.bind(this);
      this.handleNewTaskRequest = this.handleNewTaskRequest.bind(this);
    }

    handleTasksChange(event){
      console.log('CList');
      console.log(event);

      let tasks = this.state.tasks.map( (task) => {if (task.id === event.id){
        task.status = event.value;
        return task;
      } else {
        return task;
      }}) ;

      this.setState({
        tasks : tasks
      });
    }

    handleNewTaskRequest(event){
      
      console.log('CList');
      console.log(event);

      let newTask = {
        id : this.state.tasks.length+1,
        title : event.title,
        description : event.desc,
        status : false
      }

    let newArray = this.state.tasks.slice();    
    newArray.push(newTask);   
    this.setState({tasks:newArray})

    }

    render(){

      const list = this.props.list;
      
      const tasks = this.state.tasks;
      const totaltasks = tasks.length;
      let count = 0;
      tasks.map( (task)=> task.status?count++:count );
      const completedTasks = count;

      return (
        <div>
          <Grid>
            <Grid.Column width={14}>
              <Title size='medium' value={list.title}/>
              <Description value={list.description} />
              <Tags value={list.tags}/>
              <Flag name='ae' />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button floated='right' icon='edit' iconPosition='right' content='Edit' />
            </Grid.Column>
          </Grid>
          <Divider section />

          <Tasks newTaskLabel='Add new task' tasks={tasks} handleTasksChange={this.handleTasksChange} handleNewTaskRequest={this.handleNewTaskRequest} />

          <Divider hidden />
          <ProgressBar value={completedTasks} total={totaltasks} />
          </div>
      );
    }
  }
  
  function Title(props){
    return (
      <Header size={props.size}>{props.value}</Header>
    );
  }
  function Description(props){
    return (
      <div> {props.value} </div>
    );
  }
  function Tags(props){
    return (
      <div> 
      {
        props.value.map((tag)=> <span>#{tag} </span> )
      }
    </div>
    );
  }
  function ProgressBar(props){
    return (
      <Progress indicating value={props.value} total={props.total} progress='ratio' />
    );
  }

  class Task extends Component{
    constructor(props){
      super(props);
      this.state = {
        id : this.props.task.id,
        status : props.task.status
      }

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event, data){
      const target = data;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });

      this.props.handleTasksChange({action: 'updateStatus', id:this.state.id, value: target.checked});
    }

    render(){
      const status = this.state.status;
      const title = this.props.task.title;
      const desc = this.props.task.description;

      return (
        <Grid>
          <Grid.Column width={1}><Checkbox type='checkbox' name='status' checked={status} onChange={this.handleInputChange} /></Grid.Column> 
          <Grid.Column  width={13}>
            <Title size='small' value={title}/>
            <Description value={desc}/>
          </Grid.Column>
        </Grid>
      );
    }
  }
  
class Tasks extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const tasks = this.props.tasks;
    return (
      <Grid container columns={3} doubling stackable>
          {tasks.map((task)=>
            <Grid.Column  key={task.id.toString()} >
              <Segment color='green'>
                <Task task={task} handleTasksChange={this.props.handleTasksChange}/>
              </Segment>
            </Grid.Column>
          )}
            <Grid.Column>
              <Segment>
                <NewTaskModal label={this.props.newTaskLabel} handleNewTaskRequest={this.props.handleNewTaskRequest} />
              </Segment>
            </Grid.Column>
        </Grid>
    );
  }
}

class NewTaskModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      open : false
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleNewTaskRequest = this.handleNewTaskRequest.bind(this);

  }

  open(event){
    this.setState({
      open : true
    });
  }

  close(event){
    this.setState({
      open : false
    });
  }

  handleNewTaskRequest(event){
    this.props.handleNewTaskRequest(event);
    this.close();
  }

  render(){
    const button = <Button fluid animated='fade' onClick={this.open} >
                      <Button.Content hidden>{this.props.label}</Button.Content>
                      <Button.Content visible>
                        <Icon name='plus' />
                      </Button.Content>
                    </Button>;

    const open = this.state.open;

    return (
      <div>
      {button}
      <Modal closeIcon open={open} closeOnEscape={true}
          closeOnRootNodeClick={true}
          onClose={this.close}>
        <Modal.Header>Add new task</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm handleNewTaskRequest={this.handleNewTaskRequest}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    );
  }
}

class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      desc : ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name] : value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleNewTaskRequest(this.state);
  }
  
  render(){
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Title</label>
          <input name='title' placeholder='Title' onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field control={TextArea} name='desc' label='Description' placeholder='Tell us more about the task...' onChange={this.handleInputChange} />
        <Button positive icon='checkmark' labelPosition='right' content='Add' />
      </Form>
    );
  }
}
export class ListForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:'',
      desc:'',
      tags:[],
      tasks:[]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleNewTaskRequest = this.handleNewTaskRequest.bind(this);
  }

    handleTasksChange(event){
      console.log('CList');
      console.log(event);

      let tasks = this.state.tasks.map( (task) => {if (task.id === event.id){
        task.status = event.value;
        return task;
      } else {
        return task;
      }}) ;

      this.setState({
        tasks : tasks
      });
    }

    handleNewTaskRequest(event){
      
      console.log('CList');
      console.log(event);

      let newTask = {
        id : this.state.tasks.length+1,
        title : event.title,
        desc : event.desc,
        status : false
      }

    let newArray = this.state.tasks.slice();    
    newArray.push(newTask);   
    this.setState({tasks:newArray})

    }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name] : value });
  }

  handleSubmit(event) {
    console.log('submit');
    event.preventDefault();
  }

  handleReset(event) {
    this.setState({
      title:'',
      desc:'',
      tags:[],
      tasks:[]
    });
    console.log('reset');
    event.preventDefault();
  }

  render(){

    const tasks = this.state.tasks;
    const totalTasks = tasks.length;
    let count = 0;
    tasks.map( (task)=> task.status?count++:count );
    const completedTasks = count;

    return (
      <Form onSubmit={this.handleSubmit}>
        <PreventEnterSubmit>
          <Form.Field> <label>Title</label> <input name='title' placeholder='Title' onChange={this.handleInputChange} /> </Form.Field>
          <Form.Field name='desc' control={TextArea} label='Description' placeholder='Tell us more about the list...' onChange={this.handleInputChange} />
          <Form.Field> <label>Tags</label> <input name='tags'  icon='tags' iconPosition='left' placeholder='Tags' onChange={this.handleInputChange} /> </Form.Field>
          <p>* Tags separated by comma (,) </p>
          <Form.Field>
            <label>Tasks</label>
            <Tasks newTaskLabel='Add new task' tasks={tasks} handleTasksChange={this.handleTasksChange} handleNewTaskRequest={this.handleNewTaskRequest} />
          </Form.Field>
        </PreventEnterSubmit>

        <Button negative icon='repeat' labelPosition='right' content='Clear' onClick={this.handleReset} />
        <Button positive icon='checkmark' labelPosition='right' type='submit' content='Submit'/>

      </Form>
    );
  }
}

function PreventEnterSubmit(props){
  return (
    <div onKeyPress={e => {
      if (e.key === 'Enter') e.preventDefault();
    }} >
    {props.children}
    </div>
  );
}