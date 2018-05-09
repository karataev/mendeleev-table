import React from 'react';
import styled from 'styled-components';

import {findBySymbol} from "../elements";
import ElementCell from './ElementCell';

const data = 'Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'
  .split(' ');

const Title = styled.td`
text-align: center;
`;

export default class Actinoids extends React.Component {

  render() {
    return (
      <tr>
        <Title colSpan={2}>Актиноиды</Title>
        {data.map(symbol => (
          <ElementCell data={findBySymbol(symbol)} key={symbol} />
        ))}
      </tr>
    )
  }
}
