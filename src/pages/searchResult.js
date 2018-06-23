import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import { CList } from '../components/tasks';
import { listOperations } from '../modules/lists'
import { connect } from 'react-redux'

class SearchResult extends Component {
  
  constructor(props){
    super(props); 
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  async componentDidMount(){
    this.props.fetchList(this.props.match.params.id);
  }

  async handleDeleteList(event){
    this.props.deleteList(event);
  }
    render(){
        
        const clists = this.props.lists? this.props.lists:[];
        return (clists.map((list)=>
        <Container>
          <Segment>
            <CList list={list} editable={false} handleDeleteList={this.handleDeleteList} />
          </Segment>
        </Container>
        ));
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.selectedList?[state.selectedList]:[]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllCList: () =>
      dispatch(listOperations.getAllLists()),
    deleteList: (id) =>
      dispatch(listOperations.deleteList(id)),
    editList: (list) =>
      dispatch(listOperations.editList(list)),
    fetchList: (id) =>
      dispatch(listOperations.getListById(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult)