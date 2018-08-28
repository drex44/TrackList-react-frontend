import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/home";
import PrivateHome from "../../pages/privateHome";
import NewList from "../../pages/newList";
import EditList from "../../pages/editList";
import SearchResult from "../../pages/searchResult";
import { DisclaimerPolicy } from "../../pages/disclaimer";
import { TermsAndConditions } from "../../pages/terms";
import { AboutUs } from "../../pages/about";
import { ContactUs } from "../../pages/contact";
import { PrivacyPolicy } from "../../pages/privacy";
import Profile from "../../pages/profile";

class RouterBody extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (props.isLoggedIn ? <PrivateHome /> : <Home />)}
        />
        <Route exact path="/profile" component={Profile} />
        <Route path="/searchResult/:id" component={SearchResult} />
        {/* <Route exact path="/explore" component={PrivateHome} />
        <Route path="/newList" component={NewList} />
        <Route path="/editList/:id" component={EditList} /> */}

        {/* Restricted Routes */}
        <PrivateRoute
          isLoggedIn={this.props.isLoggedIn}
          exact
          path="/explore"
          component={PrivateHome}
        />
        <PrivateRoute
          isLoggedIn={this.props.isLoggedIn}
          path="/newList"
          component={NewList}
        />
        <PrivateRoute
          isLoggedIn={this.props.isLoggedIn}
          path="/editList/:id"
          component={EditList}
        />

        <Route path="/disclaimer-policy" component={DisclaimerPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.isLoggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default RouterBody;
