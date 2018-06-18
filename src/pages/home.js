import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import { CList } from '../components/tasks';

export class Home extends Component {
    render(){
        const clists = this.props.clists;
        return (clists.map((list)=>
        <Container>
          <Segment>
            <CList list={list}/>
          </Segment>
        </Container>
        ));
    }
}