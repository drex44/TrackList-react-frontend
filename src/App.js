import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CList React App</h1>
        </header>
        <p className="App-intro">

        <CList/>
        
        </p>
      </div>
    );
  }
}

function CList (props){
  const items = [{title:'research', desc: 'find all the info'}, {title:'ask the expert', desc:'contact the expert to get your doubts cleared'}];
  return (
    <div> 
      <Title value="Guide to web development"/>
      <Description value="steps you should follow while developing website"/>
      <Tags value={['web', 'website']}/>
      {items.map((item)=> <Item title={item.title} desc={item.desc}/>)}
      <ProgressBar value='20%' />
    </div>
  );
}

function Title(props){
  return (
    <div> {props.value} </div>
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

function Item(props){
  return (
    <div>
      <input type="checkbox"/><Title value={props.title} />
      <Description value={props.desc}/>
    </div>
  );
}

function ProgressBar(props){
  return (
    <div>
      {props.value}
    </div>
  );
}

export default App;
