import React from 'react';

import {findBySymbol} from "../elements";
import ElementCell from './ElementCell';

const data = 'Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No'
  .split(' ');

export default class Actinoids extends React.Component {

  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>Актиноиды</td>
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
