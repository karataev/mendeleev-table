import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.tr`
background-color: ${props => props.color};
`;

export default class ElementItem extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
  };

  render() {
    const {data, color} = this.props;

    return (
      <Root color={color}>
        <td>{data.number}</td>
        <td>{data.name_ru || data.name}</td>
        <td>{data.symbol}</td>
        <td>{data.ypos}, {data.xpos}</td>
        <td>{data.atomic_mass}</td>
      </Root>
    )
  }
}
