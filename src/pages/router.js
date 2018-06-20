import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { NewList, EditList } from '../pages/lists';


export class RouterBody extends Component {

    render(){
        return (
            <Switch>
                <Route exact path="/" render={(props) => (<Home /> )}/>
                <Route path="/newList" render={(props) => (<NewList /> )}/>
                <Route path="/editList/:id" component={EditList} />
            </Switch>
        );
    }
}