import React, { Component } from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import { MainMenu } from "../components/menu";
import { RouterBody } from "./routes";
import { Footer } from "./footer";
import { HelmetHead } from "../components/views/helmet";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <HelmetHead />
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
