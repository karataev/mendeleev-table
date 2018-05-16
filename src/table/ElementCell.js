import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Subscribe} from 'unstated';

import {CellRoot} from "../components/styles";
import {getCategoryColor} from "../elements";
import AppStore from "../stores/AppStore";

const CellRootExt = CellRoot.extend`
background: ${props => props.color};
`;

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
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {data, onClick} = this.props;

    return (
      <Subscribe to={[AppStore]}>
        {app => (
          <CellRootExt
            color={app.getElementColor(data.symbol)}
            onClick={() => onClick(data)}
          >
            <TopRow>
              <div>{data.number}</div>
              <div>{data.atomic_mass.toFixed(3)}</div>
            </TopRow>
            <Symbol>{data.symbol}</Symbol>
            <Name>{data.name_ru || data.name}</Name>
          </CellRootExt>
        )}
      </Subscribe>
    )
  }
}