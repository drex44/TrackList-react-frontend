import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Divider } from "semantic-ui-react";
import { TrackList } from "../components/lists";
import { listsOperations } from "../modules/ducks/lists";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  componentDidMount() {
    this.updateLists();
  }

  updateLists = () => {
    this.props.getAllPublicLists();
  };

  async handleDeleteList(event) {
    this.props.deleteList(event);
  }
  render() {
    const clists = this.props.publicLists ? this.props.publicLists : [];

    return clists.map(list => (
      <Container key={list.id}>
        <Segment>
          <TrackList
            list={list}
            editable={false}
            isPrivateList={false}
            handleDeleteList={this.handleDeleteList}
          />
        </Segment>
        <Divider hidden />
      </Container>
    ));
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
    deleteList: id => dispatch(listsOperations.deleteList(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
