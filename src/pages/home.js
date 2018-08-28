import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Divider, Header } from "semantic-ui-react";
import { TrackList } from "../components/lists";
import { listsOperations } from "../modules/ducks/lists";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateLists();
  }

  updateLists = () => {
    this.props.getAllPublicLists();
  };

  addPublicListToUserList = lisId => {
    this.props.addPublicListToUserList(lisId);
  };

  render() {
    const clists = this.props.publicLists ? this.props.publicLists : [];

    return clists.length > 0 ? (
      clists.map(list => (
        <Container key={list.id}>
          <Segment>
            <TrackList
              list={list}
              editable={false}
              isPrivateList={false}
              isLoggedIn={this.props.isLoggedIn}
              addPublicListToUserList={this.addPublicListToUserList}
            />
          </Segment>
          <Divider hidden />
        </Container>
      ))
    ) : (
      <Container textAlign="center">
        <Divider hidden />
        <Header> No Public TrackList available</Header>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    publicLists: state.listsReducer.publicLists,
    privateLists: state.listsReducer.privateLists,
    profile: state.profileReducer.profile,
    isLoggedIn: state.profileReducer.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllPublicLists: () => dispatch(listsOperations.getAllPublicLists()),
    getAllPrivateLists: () => dispatch(listsOperations.getAllPrivateLists()),
    deleteList: id => dispatch(listsOperations.deleteList(id)),
    addPublicListToUserList: id =>
      dispatch(listsOperations.addPublicListToUserList(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
