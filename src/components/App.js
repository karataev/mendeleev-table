import React, { Component } from 'react';
import {Provider} from 'unstated';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ElementList from '../list/ElementList';
import TablePage from "../pages/TablePage";
import CalculatorPage from '../pages/CalculatorPage';
import CellsPage from "../pages/CellsPage";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <MuiThemeProvider>
            <div>
              <Route exact path="/" component={TablePage} />
              <Route exact path="/calculator" component={CalculatorPage} />
              <Route exact path="/list" component={ElementList} />
              <Route exact path="/cells" component={CellsPage} />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
