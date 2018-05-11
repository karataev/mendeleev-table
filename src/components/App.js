import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ElementList from '../list/ElementList';
import TablePage from "./TablePage";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Navigation/>
            <div>
              <Route exact path="/" component={TablePage} />
              <Route exact path="/list" component={ElementList} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
