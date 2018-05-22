import React from 'react';
import PropTypes from 'prop-types';
import {Subscribe} from 'unstated';

import tableParser from './tableParser';
import AppStore from '../stores/AppStore';

export default class ElementTable extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    onElementSelect: PropTypes.func.isRequired,
  };

  render() {

    return (
      <div>
        <Subscribe to={[AppStore]}>
          {app => (
            <table>
              <tbody>
              {this.props.data.map((row, j) => (
                <tr key={j}>
                  {row.map((symbol, i) => tableParser.getCell(symbol, i, this.props.onElementSelect, app.getElementColor(symbol)))}
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </Subscribe>
      </div>
    )
  }
}
