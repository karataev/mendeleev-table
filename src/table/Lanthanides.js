import React from 'react';
import styled from 'styled-components';

import {findBySymbol, getLanthinidesCategory} from "../elements";
import ElementCell from './ElementCell';

const Title = styled.td`
text-align: center;
`;

export default class Lanthanides extends React.Component {

  render() {
    const symbols = getLanthinidesCategory().symbols;

    return (
      <tr>
        <Title colSpan={2}>Лантаноиды</Title>
        {symbols.map(symbol => (
          <ElementCell data={findBySymbol(symbol)} key={symbol} />
        ))}
      </tr>
    )
  }
}
