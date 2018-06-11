import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Header, Checkbox, Container, Grid, Segment, Progress, Divider, Button, Icon, Modal, Form, TextArea } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Container>
          <Segment>
            <CList/>
          </Segment>
        </Container>

        <Container>
          <Segment>
            <ListForm />
          </Segment>
        </Container>
        
      </div>
    );
  }
}



function CList (props){
  const items = [{title:'research1', desc: 'find all the info'}, {title:'research', desc: 'find all the info'}, {title:'ask the expert', desc:'contact the expert to get your doubts cleared'}];
  return (
    <div>
        <Grid>
      <Grid.Column width={14}>
      <Title size='medium' value="Guide to web development"/>
      <Description value="steps you should follow while developing website"/>
      <Tags value={['web', 'website']}/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Button floated='right' icon='edit' iconPosition='right' content='Edit' />
      </Grid.Column>
      </Grid>
      <Divider section />

      <Grid container columns={3} doubling stackable>
        {items.map((item)=>
          <Grid.Column>
            <Segment color='green'>
              <Item title={item.title} desc={item.desc}/>
            </Segment>
          </Grid.Column>
        )}
          <Grid.Column>
            <Segment>
              <NewTaskModal label='Add new task' />
            </Segment>
          </Grid.Column>
      </Grid>
      <Divider hidden />
      <ProgressBar value={1} total={3} />
      </div>
  );
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
function Item(props){
  return (
    <Grid>
      <Grid.Column width={1}><Checkbox /></Grid.Column> 
      <Grid.Column  width={13}>
        <Title size='small' value={props.title}/>
        <Description value={props.desc}/>
      </Grid.Column>
    </Grid>
  );
}
function AddNew(props){
  return (
    <Button fluid animated='fade'>
      <Button.Content hidden>{props.label}</Button.Content>
      <Button.Content visible>
        <Icon name='plus' />
      </Button.Content>
    </Button>
  );
}
function NewTaskModal(props){
  const button = <Button fluid animated='fade'>
                    <Button.Content hidden>{props.label}</Button.Content>
                    <Button.Content visible>
                      <Icon name='plus' />
                    </Button.Content>
                  </Button>;

  return (
    <Modal trigger={button} closeIcon>
      <Modal.Header>Add new task</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <TaskForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
function TaskForm(props){
return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Title' />
      </Form.Field>
      <Form.Field control={TextArea} label='Description' placeholder='Tell us more about the task...' />
      <Button type='submit' positive icon='checkmark' labelPosition='right' content='Add' />
    </Form>
  );
}
function ListForm(props){
  return (
    <Form>
      <Form.Field> <label>Title</label> <input placeholder='Title'/> </Form.Field>
      <Form.Field control={TextArea} label='Description' placeholder='Tell us more about the list...' />
      <Form.Field> <label>Tags</label> <input  icon='tags' iconPosition='left' placeholder='Tags'/> </Form.Field>
      <p>* Tags separated by comma (,) </p>
      <Form.Field width={2}>
        <label>Tasks</label>
        <NewTaskModal label='Add task'/>
      </Form.Field>
      <Button negative icon='repeat' labelPosition='right' content='Clear' />
      <Button type='submit' positive icon='checkmark' labelPosition='right' content='Submit' />
    </Form>
  );
}

export default App;
