import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Header } from "semantic-ui-react";
import { ListForm } from "../components/tasks";
import { listOperations } from "../modules/lists";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Redirect: false
    };
    this.handleEditListSubmit = this.handleEditListSubmit.bind(this);
  }

  async componentDidMount() {
    this.props.fetchList(this.props.match.params.id);
  }

  async handleEditListSubmit(list) {
    this.props.editList(list);
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
        <Header> Edit TrackList </Header>
        <Segment>
          <ListForm
            editable={true}
            list={this.props.list}
            handleListSubmit={this.handleEditListSubmit}
          />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.selectedList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editList: list => dispatch(listOperations.editList(list)),
    fetchList: id => dispatch(listOperations.getListById(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditList);
