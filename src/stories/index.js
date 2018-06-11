import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>test Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('CList', module).add('CList', () => <App />);

  class App extends Component {
    render() {
      return (
        <div className="App">
  
          <CList/>
          
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
  