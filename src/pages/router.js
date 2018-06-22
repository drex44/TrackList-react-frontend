import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import NewList from '../pages/newList';
import EditList from '../pages/editList';

export class RouterBody extends Component {

    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newList" component={NewList} />
                <Route path="/editList/:id" component={EditList} />
            </Switch>
        );
    }
}