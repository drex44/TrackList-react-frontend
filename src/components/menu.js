import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Segment, Menu, Input, Button, Icon, Label, Dropdown, Responsive, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class MainMenu extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;
  
      return (
        <Segment inverted>
        <Grid centered>
        <Responsive {...Responsive.onlyComputer}>
          <Menu compact inverted fluid size='huge' attached='top'>
            <Menu.Item name='logo' active={activeItem === 'logo'} onClick={this.handleItemClick} > 
              <Link to="/"> <Icon name='check circle outline' size='big' color='teal' /> </Link> 
            </Menu.Item>
            <Menu.Item
              name='notifications'
              active={activeItem === 'notifications'}
              onClick={this.handleItemClick}>
              Notifications <Label color='teal'>1</Label>
            </Menu.Item>

            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>

            <Menu.Item name='new list' active={activeItem === 'new list'} onClick={this.handleItemClick} >
              <Link to="/newList">
              <Button fluid basic inverted animated='fade' >
                <Button.Content hidden>New List</Button.Content>
                <Button.Content visible>
                  <Icon name='plus' />
                </Button.Content>
              </Button>
              </Link>
            </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='my lists'
              active={activeItem === 'my lists'}
              onClick={this.handleItemClick}
            />
          <Dropdown text='Profile' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Other</Dropdown.Header>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>
          </Menu>
            </Responsive>
          </Grid>
        </Segment>
      )
    }
  }