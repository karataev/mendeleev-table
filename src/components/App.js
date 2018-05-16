import React, { Component } from 'react';
import {Provider} from 'unstated';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ElementList from '../list/ElementList';
import TablePage from "./TablePage";
import CalculatorPage from './CalculatorPage';
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <MuiThemeProvider>
            <div>
              <Navigation/>
              <div>
                <Route exact path="/" component={TablePage} />
                <Route exact path="/calculator" component={CalculatorPage} />
                <Route exact path="/list" component={ElementList} />
              </div>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
