import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Header } from 'semantic-ui-react';
import { ListForm } from '../components/tasks';
import { listOperations } from '../modules/lists'
import { connect } from 'react-redux'

class NewList extends Component {

  constructor(props) {
    super(props);
    this.handleAddNewListSubmit = this.handleAddNewListSubmit.bind(this);
  }

  async handleAddNewListSubmit(list) {
    // let res = await createNewList(list);
    this.props.createList(list);
  }

  render() {
    return (
      <Container>
        <Header> Create new TrackList </Header>
        <Segment>
          <ListForm editable={true} handleListSubmit={this.handleAddNewListSubmit} />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    createList: (list) =>
      dispatch(listOperations.createList(list)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList)