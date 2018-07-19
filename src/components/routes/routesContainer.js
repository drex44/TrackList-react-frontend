import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

// import { connect } from "react-redux";
import RouterBody from "./routes";

class RouterBodyContainer extends Component {
  render() {
    return <RouterBody isLoggedIn={this.props.isLoggedIn} />;
  }
}

// const mapStateToProps = state => {
//   return {
//     isLoggedIn: state.profileReducer.isLoggedIn
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
// )(RouterBodyContainer);

export default RouterBodyContainer;
