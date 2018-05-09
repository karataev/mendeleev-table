import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import {init} from "./elements";

init();

ReactDOM.render(<App />, document.getElementById('root'));
