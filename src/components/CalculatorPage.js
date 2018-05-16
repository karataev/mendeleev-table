import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Subscribe} from 'unstated';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";
import FormulaStore from '../stores/FormulaStore';
import MassCalculator from './MassCalculator';
import AppStore from "../stores/AppStore";


export default class CalculatorPage extends React.Component {

  render() {
    return (
      <Fragment>
        <CategoryList/>
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
