import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Grid, Segment } from 'semantic-ui-react';
import { ListForm } from '../components/tasks';

export class NewList extends Component {
    render(){
        return (<Container>
            <Segment>
              <ListForm />
            </Segment>
          </Container>);
    }
}