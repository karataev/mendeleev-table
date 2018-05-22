import React, {Fragment} from 'react';
import {Subscribe} from 'unstated';

import ElementTable from "../table/ElementTable";
import FormulaStore from '../stores/FormulaStore';
import MassCalculator from '../components/MassCalculator';
import AppStore from "../stores/AppStore";


export default class CalculatorPage extends React.Component {

  render() {
    return (
      <Fragment>
        <Subscribe to={[AppStore, FormulaStore]}>
          {(app, formula) => (
            <Fragment>
              <ElementTable
                data={app.getTableForm().data}
                onElementSelect={(el) => formula.addElement(el)}
              />
              <MassCalculator
                elements={formula.state.elements}
                onClear={() => formula.clear()}
              />
            </Fragment>
          )}
        </Subscribe>
      </Fragment>
    )
  }
}
