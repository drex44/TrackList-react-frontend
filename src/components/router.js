import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { NewList } from '../pages/newList';


export class RouterBody extends Component {

    render(){
        return (
            <Switch>
            <Route exact path="/" render={(props) => (<Home clists = {this.props.clists} /> )}/>
            <Route path="/newList" component={NewList} />
            </Switch>
        );
    }
}