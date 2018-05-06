import React, { Component } from 'react';

import data from '../data/PeriodicTableJSON';
import ElementTable from "./ElementTable";

class App extends Component {
  render() {
    return (
      <div>
        <ElementTable elements={data.elements}/>
      </div>
    );
  }
}

export default App;
