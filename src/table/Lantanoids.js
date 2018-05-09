import React from 'react';
import styled from 'styled-components';

import {findBySymbol} from "../elements";
import ElementCell from './ElementCell';

const data = 'La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu'
  .split(' ');

const Title = styled.td`
text-align: center;
`;

export default class Lantanoids extends React.Component {

  render() {
    return (
      <tr>
        <Title colSpan={2}>Лантаноиды</Title>
        {data.map(symbol => (
          <ElementCell data={findBySymbol(symbol)} key={symbol} />
        ))}
      </tr>
    )
  }
}
