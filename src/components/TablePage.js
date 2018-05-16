import React, {Fragment} from 'react';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";


export default class TablePage extends React.Component {

  onElementSelect = el => {
    console.log('select', el);
  };

  render() {
    return (
      <Fragment>
        <CategoryList/>
        <ElementTable
          onElementSelect={this.onElementSelect}
        />
      </Fragment>
    )
  }
}
