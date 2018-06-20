import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

const root = <BrowserRouter>
                <App />
            </BrowserRouter>

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
