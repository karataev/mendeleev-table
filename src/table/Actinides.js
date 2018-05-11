import React from 'react';
import styled from 'styled-components';

import {findBySymbol, getActinidesCategory} from "../elements";
import ElementCell from './ElementCell';


const Title = styled.td`
text-align: center;
`;

export default class Actinides extends React.Component {

  render() {
    const symbols = getActinidesCategory().symbols;

    return (
      <tr>
        <Title colSpan={2}>Актиноиды</Title>
        {symbols.map(symbol => (
          <ElementCell data={findBySymbol(symbol)} key={symbol} />
        ))}
      </tr>
    )
  }
}
