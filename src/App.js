import React, { Component } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Grid, Segment } from 'semantic-ui-react';

import { BrowserRouter, Route } from 'react-router-dom';

import { CList, ListForm } from './components/tasks';
import { MainMenu } from './components/menu';
import { RouterBody } from './components/router';

import { GetAllTasks, getAllCList, GetAllCList } from './apis/tasks';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clists : []
    }
  }

  async componentDidMount() {
    let clists =await GetAllCList(this);
    console.log(clists);
  }

  render() {
    const clists = this.state.clists;

    return (
      <div className="App">
      
      <MainMenu />
      <RouterBody clists={clists} />
        
      </div>
    );
  }
}

export default App;
