import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Header } from "semantic-ui-react";
import { ListForm } from "../components/tasks";
import { listsOperations } from "../modules/ducks/lists";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Redirect: false
    };
    this.handleAddNewListSubmit = this.handleAddNewListSubmit.bind(this);
  }

  async handleAddNewListSubmit(list) {
    this.props.createList(list);
    this.props.history.push("/");
  }

  resetComponent = () => this.setState({ Redirect: false, id: "" });

  render() {
    return (
      <Container>
        <Header> Create new TrackList </Header>
        <Segment>
          <ListForm
            editable={true}
            handleListSubmit={this.handleAddNewListSubmit}
          />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    createList: list => dispatch(listsOperations.createList(list))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewList)
);
