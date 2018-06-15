import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Button } from 'semantic-ui-react';

import { CList, ListForm } from '../components/tasks';
import { MainMenu } from '../components/menu';

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

storiesOf('Menu', module).add('top menu', () => <MainMenu /> );
storiesOf('CList', module).add('CList', () => <App />);

  class App extends Component {
    render() {
      return (
        <div className="App">
  
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

          <MainMenu />
          
        </div>
      );
    }
  }