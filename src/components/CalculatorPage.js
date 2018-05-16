import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Subscribe} from 'unstated';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";
import FormulaStore from '../stores/FormulaStore';
import MassCalculator from './MassCalculator';


export default class CalculatorPage extends React.Component {

  render() {
    return (
      <Fragment>
        <CategoryList/>
        <Subscribe to={[FormulaStore]}>
          {store => (
            <Fragment>
              <ElementTable
                onElementSelect={(el) => store.addElement(el)}
              />
              <MassCalculator
                elements={store.state.elements}
                onClear={() => store.clear()}
              />
            </Fragment>
          )}
        </Subscribe>
      </Fragment>
    )
  }
}
