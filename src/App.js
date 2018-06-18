import React, { Component } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import { MainMenu } from './components/menu';
import { RouterBody } from './components/router';

import { getAllCList, createNewList } from './apis/tasks';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clists : []
    }

    this.handleAddNewListSubmit = this.handleAddNewListSubmit.bind(this);
  }

  async componentDidMount() {
    await getAllCList(this);
  }

  async handleAddNewListSubmit(list){
    let res = await createNewList(list);
    return res;
  }

  render() {
    const clists = this.state.clists;

    return (
      <div className="App">
      
      <MainMenu />
      <RouterBody clists={clists} handleAddNewListSubmit={this.handleAddNewListSubmit}/>
        
      </div>
    );
  }
}

export default App;
