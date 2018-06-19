import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import { ListForm } from '../components/tasks';

import { getListById, createNewList, editList } from '../apis/tasks';

export class NewList extends Component {
constructor(props){
    super(props);
    this.handleAddNewListSubmit = this.handleAddNewListSubmit.bind(this);
}

async handleAddNewListSubmit(list){
    let res = await createNewList(list);
    return res;
    }

    render(){
        return (<Container>
            <Segment>
              <ListForm handleListSubmit={this.handleAddNewListSubmit} />
            </Segment>
          </Container>);
    }
}

export class EditList extends Component {

    constructor(props){
        super(props);
        this.getListById = this.getListById.bind(this);
        this.handleEditListSubmit = this.handleEditListSubmit.bind(this);
    }

    async handleEditListSubmit(list){
        let res = await editList(list);
        return res;
    }

    async getListById(id){
        const res = await getListById(id);
        return res;
    }
    
    render(){
        return (
        <Container>
            <Segment>
                <ListForm editable={true} id={this.props.match.params.id} getListById={getListById} handleListSubmit={this.handleEditListSubmit} />
            </Segment>
        </Container>);
    }
}