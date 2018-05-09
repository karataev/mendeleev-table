import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ElementTable from "../table/ElementTable";
import ElementList from '../list/ElementList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Таблица</Link></li>
            <li><Link to="/list">Список</Link></li>
          </ul>
          <Route exact path="/" component={ElementTable} />
          <Route exact path="/list" component={ElementList} />
        </div>
      </Router>
    );
  }
}

export default App;
