import React, { Component } from "react";
import { listsOperations } from "../../modules/ducks/lists";
import { connect } from "react-redux";
import SearchField from "../views/searchBar";

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }
  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  render() {
    return (
      <SearchField
        searchResult={this.props.searchResult}
        clearSearch={this.props.clearSearch}
        search={this.props.searchLists}
        input={{ icon: "search", iconPosition: "left" }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResult: state.listsReducer.searchResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchLists: text => dispatch(listsOperations.searchLists(text)),
    clearSearch: () => dispatch(listsOperations.clearSearchLists())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
