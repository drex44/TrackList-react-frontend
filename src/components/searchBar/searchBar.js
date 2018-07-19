import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import { Label, Search } from "semantic-ui-react";
import _ from "lodash";
import { withRouter } from "react-router";

const resultRenderer = ({ title }) => <Label content={title} />;

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, value: "" });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    this.props.history.push("/searchResult/" + result.id);
    this.props.clearSearch();
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      this.props.searchLists(this.state.value);
      this.setState({
        isLoading: false
      });
    }, 300);
  };

  render() {
    const { isLoading, value } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={this.props.searchResult}
        value={value}
        resultRenderer={resultRenderer}
        {...this.props}
      />
    );
  }
}

export default withRouter(SearchBar);
