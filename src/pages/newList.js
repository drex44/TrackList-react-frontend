import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Header } from "semantic-ui-react";
import { ListForm } from "../components/tasks";
import { listOperations } from "../modules/lists";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Redirect: false
    };
    this.handleAddNewListSubmit = this.handleAddNewListSubmit.bind(this);
  }

  async handleAddNewListSubmit(list) {
    // let res = await createNewList(list);
    this.props.createList(list);
    this.setState({ Redirect: true, id: list.id });
  }

  resetComponent = () => this.setState({ Redirect: false, id: "" });

  render() {
    if (this.state.Redirect) {
      const id = this.state.id;
      this.resetComponent();
      return <Redirect push to={{ pathname: "/" }} />;
    }
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
    createList: list => dispatch(listOperations.createList(list))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList);
