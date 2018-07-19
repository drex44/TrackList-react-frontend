import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Header } from "semantic-ui-react";
import { TrackListForm } from "../components/lists";
import { listsOperations } from "../modules/ducks/lists";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };
    this.handleEditListSubmit = this.handleEditListSubmit.bind(this);
  }

  async componentDidMount() {
    let response = await listsOperations.getListById(
      this.props.match.params.id
    );
    console.log(response);

    this.setState({ list: response });
  }

  async handleEditListSubmit(list) {
    this.props.editList(list);
    this.props.history.push("/");
  }

  render() {
    const list = this.state.list;
    return (
      <Container>
        <Header> Edit TrackList </Header>
        <Segment>
          <TrackListForm
            editable={true}
            list={list}
            id={this.props.match.params.id}
            handleListSubmit={this.handleEditListSubmit}
          />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // list: state.selectedList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editList: list => dispatch(listsOperations.editList(list)),
    clearSelectedList: () => dispatch(listsOperations.clearSelectedList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditList)
);
