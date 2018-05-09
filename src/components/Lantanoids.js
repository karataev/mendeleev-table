import React from 'react';

import {findBySymbol} from "../elements";
import ElementCell from './ElementCell';

const data = 'La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb'
  .split(' ');

export default class Lantanoids extends React.Component {

  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>Лантаноиды</td>
            {data.map(symbol => (
              <ElementCell data={findBySymbol(symbol)} key={symbol} />
            ))}
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
