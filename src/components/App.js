import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ElementList from '../list/ElementList';
import TablePage from "./TablePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Таблица</Link></li>
            <li><Link to="/list">Список</Link></li>
          </ul>
          <Route exact path="/" component={TablePage} />
          <Route exact path="/list" component={ElementList} />
        </div>
      </Router>
    );
  }
}

export default App;
