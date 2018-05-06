import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
border: 1px solid #aaa;
padding: 5px;
flex: 80px 0 0;
height: 50px;
font-size: 12px;
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
      <Root>
        <div>{data.number}</div>
        <Symbol>{data.symbol}</Symbol>
        <Name>{data.name}</Name>
      </Root>
    )
  }
}