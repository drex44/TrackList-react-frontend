import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import { ListForm } from '../components/tasks';
import { getListById } from '../apis/tasks';
import { listOperations } from '../modules/lists';
import { connect } from 'react-redux';

export class EditList extends Component {

    constructor(props){
        super(props);
        this.getListById = this.getListById.bind(this);
        this.handleEditListSubmit = this.handleEditListSubmit.bind(this);
    }

    async componentDidMount(){
        this.props.fetchList(this.props.match.params.id);
    }

    async handleEditListSubmit(list){
        this.props.editList(list);
    }

    async getListById(){
        const res = await getListById(this.props.match.params.id);
        return res;
    }
    
    render(){
        return (
        <Container>
            <Segment>
                <ListForm editable={true} list={this.props.list} id={this.props.match.params.id} getListById={getListById} handleListSubmit={this.handleEditListSubmit} />
            </Segment>
        </Container>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      list: state.selectedList,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      editList: (list) =>
        dispatch(listOperations.editList(list)),
      fetchList: (id) =>
        dispatch(listOperations.getListById(id))
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditList)