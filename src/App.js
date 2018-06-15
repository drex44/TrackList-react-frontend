import React, { Component } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Header, Checkbox, Container, Grid, Segment, Progress, Divider, Button, Icon, Modal, Form, TextArea } from 'semantic-ui-react';

import { CList, ListForm } from './components/tasks';
import { MainMenu } from './components/menu';


class App extends Component {
  render() {
    return (
      <div className="App">

        <MainMenu />

        <Container>
          <Segment>
            <CList tasks={[{id:1 , title:'research1', desc: 'find all the info', status: true}, 
      {id:2 ,title:'research', desc: 'find all the info', status: true}, 
      {id:3 ,title:'ask the expert', desc:'contact the expert to get your doubts cleared', status: false}]}/>
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

export default App;
