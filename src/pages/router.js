import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Switch, Route } from 'react-router-dom';
import Home from './home';
import NewList from './newList';
import EditList from './editList';
import SearchResult from './searchResult';

export class RouterBody extends Component {

    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newList" component={NewList} />
                <Route path="/editList/:id" component={EditList} />
                <Route path="/searchResult/:id" component={SearchResult} />
            </Switch>
        );
    }
}