import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {CellRoot} from "../components/styles";

const TopRow = styled.div`
display: flex;
justify-content: space-between;
`;

const Symbol = styled.div`
text-align: center;
font-size: 20px;
`;

const Name = styled.div`
text-align: center;
`;

export default class ElementCell extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {data} = this.props;

    return (
      <CellRoot>
        <TopRow>
          <div>{data.number}</div>
          <div>{data.atomic_mass.toFixed(3)}</div>
        </TopRow>
        <Symbol>{data.symbol}</Symbol>
        <Name>{data.name_ru || data.name}</Name>
      </CellRoot>
    )
  }
}