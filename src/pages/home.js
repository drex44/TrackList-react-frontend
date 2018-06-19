import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import { CList } from '../components/tasks';

import { getAllCList, deleteList } from '../apis/tasks';

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      clists : []
    }

    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  async componentDidMount() {
    await getAllCList(this);
  }

  async handleDeleteList(event){
    const res = await deleteList(event);
    console.log(res);
  }
    render(){
        const clists = this.state.clists;
        return (clists.map((list, index)=>
        <Container>
          <Segment>
            <CList list={list} handleDeleteList={this.handleDeleteList} />
          </Segment>
        </Container>
        ));
    }
}