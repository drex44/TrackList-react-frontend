import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Divider } from "semantic-ui-react";
import { CList } from "../components/tasks";
import { listOperations } from "../modules/lists";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  async componentDidMount() {
    this.props.getAllCList();
  }

  async handleDeleteList(event) {
    this.props.deleteList(event);
  }
  render() {
    const clists = this.props.lists ? this.props.lists : [];
    return clists.map(list => (
      <Container>
        <Segment>
          <CList
            list={list}
            editable={false}
            isUserList={false}
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
    lists: state.lists
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllCList: () => dispatch(listOperations.getAllLists()),
    deleteList: id => dispatch(listOperations.deleteList(id))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
