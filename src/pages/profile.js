import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
