import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

import { Switch, Route } from "react-router-dom";

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

import PrivateRoute from "./privateRoute";

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
        <PrivateRoute exact path="/explore" component={PrivateHome} />
        <PrivateRoute path="/newList" component={NewList} />
        <PrivateRoute path="/editList/:id" component={EditList} />

        <Route path="/disclaimer-policy" component={DisclaimerPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    );
  }
}

export default RouterBody;
