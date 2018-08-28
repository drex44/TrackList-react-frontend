import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Menu,
  Button,
  Icon,
  Responsive,
  Grid,
  Sidebar,
  Divider,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "../searchBar";
import { LoginModal } from "../authenticate";
import GoogleAuth from "../googleAuth";

class MainMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const mobileMenu = (
      <div>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/">
            <Icon name="check circle outline" size="big" color="teal" />
            {"TrackLists"}
          </Link>
        </Menu.Item>
        <Menu.Item
          name="new list"
          active={activeItem === "new list"}
          onClick={this.handleItemClick}
        >
          <Link to="/newList">New List</Link>
        </Menu.Item>
        <Menu.Item
          name="new list"
          active={activeItem === "new list"}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </div>
    );

    const mobileMenuHeader = [
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={this.handleItemClick}
      >
        <Link to="/">
          <Icon name="check circle outline" size="big" color="teal" />
        </Link>
      </Menu.Item>,
      <Menu.Item>
        <SearchBar />
      </Menu.Item>
    ];

    const desktopMenu = (
      <Menu size="huge" pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as="p"
        >
          <Link to="/">
            <Icon name="check circle outline" size="big" color="teal" />
            {"TrackLists"}
          </Link>
        </Menu.Item>
        {/* <Menu.Item
              name='notifications'
              active={activeItem === 'notifications'}
              onClick={this.handleItemClick}>
              Notifications <Label color='teal'>1</Label>
            </Menu.Item> */}

        <Menu.Item>
          <SearchBar />
        </Menu.Item>

        {this.props.isLoggedIn ? (
          <Menu.Item
            name="new list"
            active={activeItem === "new list"}
            onClick={this.handleItemClick}
          >
            <Link to="/newList">
              <Button fluid basic animated="fade">
                <Button.Content hidden>New List</Button.Content>
                <Button.Content visible>
                  <Icon name="plus" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>
        ) : null}

        {this.props.isLoggedIn ? (
          <Menu.Item
            name="explore"
            active={activeItem === "explore"}
            onClick={this.handleItemClick}
          >
            <Link to="/explore">
              <Button basic> My Lists </Button>
            </Link>
          </Menu.Item>
        ) : null}

        {!this.props.isLoggedIn ? (
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          >
            <LoginModal />
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Dropdown
              text={this.props.profile.givenName}
              pointing
              className="button basic"
            >
              <Dropdown.Menu>
                <Link to="/profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                {/* <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Other</Dropdown.Header> */}
                <Dropdown.Item>
                  <GoogleAuth button="logout" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Menu>
    );
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <MobileMenu
            menuItems={mobileMenu}
            mobileMenuHeader={mobileMenuHeader}
          >
            {this.props.children}
          </MobileMenu>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <DesktopMenu menuItems={desktopMenu}>
            {this.props.children}
          </DesktopMenu>
        </Responsive>
      </div>
    );
  }
}

export class DesktopMenu extends Component {
  render() {
    return (
      <div className="navbar">
        <Grid centered>{this.props.menuItems}</Grid>
        <Divider hidden />
        {this.props.children}
      </div>
    );
  }
}

export class MobileMenu extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            animation="push"
            icon="labeled"
            as={Menu}
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
            onClick={this.handleButtonClick}
          >
            {this.props.menuItems}
          </Sidebar>
          <Sidebar.Pusher>
            <Menu pointing secondary>
              <Menu.Item onClick={this.handleButtonClick}>
                <Icon name="sidebar" size="big" color="teal" />
              </Menu.Item>
              {this.props.mobileMenuHeader}
            </Menu>
            <div onClick={this.handleSidebarHide}>{this.props.children}</div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    isLoggedIn: state.profileReducer.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(MainMenu);
