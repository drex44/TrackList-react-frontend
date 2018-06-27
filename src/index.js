import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const root =
    <ReduxProvider store={reduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
