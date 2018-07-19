import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";
import { TrackList } from "../components/lists";
import { listsOperations } from "../modules/ducks/lists";
import { connect } from "react-redux";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  async componentDidMount() {
    let response = await listsOperations.getListById(
      this.props.match.params.id
    );
    this.setState({ lists: [response] });
  }

  async handleDeleteList(event) {
    this.props.deleteList(event);
  }
  render() {
    const clists = this.state.lists ? this.state.lists : [];
    return clists.map(list => (
      <Container>
        <Segment>
          <TrackList
            list={list}
            editable={false}
            handleDeleteList={this.handleDeleteList}
          />
        </Segment>
      </Container>
    ));
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCList: () => dispatch(listsOperations.getAllLists()),
    deleteList: id => dispatch(listsOperations.deleteList(id)),
    editList: list => dispatch(listsOperations.editList(list))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchResult);
