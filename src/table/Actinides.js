import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {findBySymbol, getActinidesCategory} from "../elements";
import ElementCell from './ElementCell';


const Title = styled.td`
text-align: center;
`;

export default class Actinides extends React.Component {

  static propTypes = {
    onElementClick: PropTypes.func.isRequired,
  };

  render() {
    const symbols = getActinidesCategory().symbols;

    return (
      <tr>
        <Title colSpan={2}>Актиноиды</Title>
        {symbols.map(symbol => (
          <ElementCell
            data={findBySymbol(symbol)}
            onClick={this.props.onElementClick}
            key={symbol}
          />
        ))}
      </tr>
    )
  }
}
