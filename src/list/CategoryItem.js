import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorBox = styled.span`
display: inline-block;
width: 20px;
height: 20px;
margin-right: 10px;
border: 2px solid #666;
background: ${props => props.color};
`;

export default class CategoryItem extends React.Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
  };

  render() {
    const {category} = this.props;

    return (
      <div>
        <ColorBox color={category.color} />
        <span>{category.name}</span>
      </div>
    )
  }
}
