import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WIDTH = 60;
const HEIGHT = 60;

const Root = styled.div`
position: absolute;
top: ${props => props.y * HEIGHT}px;
left: ${props => props.x * WIDTH}px;
width: ${WIDTH}px;
height: ${HEIGHT}px;
border: 1px solid #22292F;
font-size: 10px;
color: #22292F;
background: #FFF;
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

export default class Element extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {data} = this.props;

    return (
      <Root x={data.xpos - 1} y={data.ypos - 1}>
        <TopRow>
          <div>{data.number}</div>
          <div>{data.atomic_mass.toFixed(3)}</div>
        </TopRow>
        <Symbol>{data.symbol}</Symbol>
        <Name>{data.name}</Name>
      </Root>
    )
  }
}