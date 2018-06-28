import React, { Component } from "react";
import { listOperations } from "../../modules/lists";
import { connect } from "react-redux";
import { SearchBar as SearchField } from "../views/searchBar";

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
    searchResult: state.searchResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchLists: text => dispatch(listOperations.searchLists(text)),
    clearSearch: () => dispatch(listOperations.clearSearchLists())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
