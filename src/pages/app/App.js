import React, { Component } from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import MainMenu from "../../components/navigationMenu";
import RouterBody from "../../components/routes";
import { Footer } from "../footer";
import Headers from "../../components/headers";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <Headers />
          <MainMenu>
            <RouterBody />
          </MainMenu>
          <Footer />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
