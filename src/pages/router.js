import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Switch, Route } from 'react-router-dom';
import Home from './home';
import NewList from './newList';
import EditList from './editList';
import SearchResult from './searchResult';

import { DisclaimerPolicy } from '../components/views/disclaimer';
import { TermsAndConditions } from '../components/views/terms';
import { AboutUs } from '../components/views/about';
import { ContactUs } from '../components/views/contact';
import { PrivacyPolicy } from '../components/views/privacy';

export class RouterBody extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newList" component={NewList} />
                <Route path="/editList/:id" component={EditList} />
                <Route path="/searchResult/:id" component={SearchResult} />

                <Route path="/disclaimer-policy" component={DisclaimerPolicy} />
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/contact-us" component={ContactUs} />
            </Switch>
        );
    }
}