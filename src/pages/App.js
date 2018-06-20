import React, { Component } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import { MainMenu } from '../components/menu';
import { RouterBody } from './router';

class App extends Component {

  render() {
    return (
      <div className="App">
      
      <MainMenu />
      <RouterBody />
        
      </div>
    );
  }
}

export default App;
