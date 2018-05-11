import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Root = styled.div`
background: ${props => props.color};
padding: 5px;
`;

export default class CategoryItem extends React.Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
  };

  render() {
    const {category} = this.props;

    return (
      <Root color={category.color}>
        <span>{category.name}</span>
      </Root>
    )
  }
}
