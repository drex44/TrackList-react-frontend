import React, { Component } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import { MainMenu } from '../components/menu';
import { RouterBody } from './router';
import { HelmetHead } from '../components/views/helmet';

class App extends Component {

  render() {
    return (
      <div className="App">
        <HelmetHead />
        <MainMenu />
        <RouterBody />
      </div>
    );
  }
}

export default App;
