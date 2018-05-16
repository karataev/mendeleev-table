import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Root = styled.div`
background: ${props => props.color};
padding: 5px;
`;

export default class CategoryItem extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const {item} = this.props;

    return (
      <Root color={item.color}>
        <span>{item.title}</span>
      </Root>
    )
  }
}
