import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {findBySymbol, getLanthinidesCategory} from "../elements";
import ElementCell from './ElementCell';

const Title = styled.td`
text-align: center;
`;

export default class Lanthanides extends React.Component {

  static propTypes = {
    onElementClick: PropTypes.func.isRequired,
  };

  render() {
    const symbols = getLanthinidesCategory().symbols;

    return (
      <tr>
        <Title colSpan={2}>Лантаноиды</Title>
        {symbols.map(symbol => (
          <ElementCell
            onClick={this.props.onElementClick}
            data={findBySymbol(symbol)}
            key={symbol}
          />
        ))}
      </tr>
    )
  }
}
