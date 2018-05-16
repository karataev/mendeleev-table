import React from 'react';
import styled from 'styled-components';

import {getCategories} from "../elements";
import CategoryItem from "./CategoryItem";


const Root = styled.div`
display: flex;
`;

export default class CategoryList extends React.Component {

  render() {
    const categories = getCategories();

    return (
      <Root>
        {categories.map((category, i) => (
          <CategoryItem category={category} key={i} />
        ))}
      </Root>
    )
  }
}
