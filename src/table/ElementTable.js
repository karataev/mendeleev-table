import React from 'react';
import PropTypes from 'prop-types';

import tableParser from './tableParser';


export default class ElementTable extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    onElementSelect: PropTypes.func.isRequired,
  };

  render() {

    return (
      <div>
        <table>
          <tbody>
          {this.props.data.map((row, j) => (
            <tr key={j}>
              {row.map((symbol, i) => tableParser.getCell(symbol, i, this.props.onElementSelect))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
