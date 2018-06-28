import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import { Input, Icon, Label, Search } from "semantic-ui-react";
import _ from "lodash";
import { Redirect } from "react-router";

const categoryRenderer = ({ title }) => <Label as={"span"} content={title} />;
const resultRenderer = ({ title }) => <Label content={title} />;

export class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, value: "", Redirect: false, id: "" });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title, Redirect: true, id: result.id });
    this.props.clearSearch();
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      this.props.search(this.state.value);
      this.setState({
        isLoading: false
      });
    }, 300);
  };

  render() {
    if (this.state.Redirect) {
      const id = this.state.id;
      this.resetComponent();
      return <Redirect push to={{ pathname: "/searchResult/" + id }} />;
    }
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

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearText = this.handleClearText.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }
  handleClearText(event) {
    this.setState({ searchText: "" });
  }
  handleRef = c => {
    this.inputRef = c;
  };
  focus = () => {
    this.inputRef.focus();
  };

  render() {
    return (
      <Input
        name="searchText"
        value={this.state.searchText}
        labelPosition="left"
        icon
        placeholder="Search..."
        ref={this.handleRef}
        onChange={this.handleInputChange}
      >
        <Label basic onClick={this.focus}>
          <Icon name="search" link="true" />
        </Label>
        <input />
        <Icon name="delete" link="true" onClick={this.handleClearText} />
      </Input>
    );
  }
}
