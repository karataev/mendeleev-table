import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CellRoot, Symbol} from "../components/styles";

const CellRootExt = CellRoot.extend`
background: ${props => props.color};
`;

const TopRow = styled.div`
display: flex;
justify-content: space-between;
`;

const Name = styled.div`
text-align: center;
`;

export default class ElementCell extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string.isRequired,
  };

  render() {
    const {data, color, onClick} = this.props;

    return (
      <CellRootExt
        color={color}
        onClick={() => onClick && onClick(data)}
      >
        <TopRow>
          <div>{data.number}</div>
          <div>{data.atomic_mass.toFixed(3)}</div>
        </TopRow>
        <Symbol>{data.symbol}</Symbol>
        <Name>{data.name_ru || data.name}</Name>
      </CellRootExt>
    )
  }
}