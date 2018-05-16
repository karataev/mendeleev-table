import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryItem from "./CategoryItem";


const Root = styled.div`
display: flex;
`;

export default class CategoryList extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Root>
        {this.props.items.map((item, i) => (
          <CategoryItem item={item} key={i} />
        ))}
      </Root>
    )
  }
}
