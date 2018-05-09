import React from 'react';

import {getCategories} from "../elements";
import CategoryItem from "./CategoryItem";

export default class CategoryList extends React.Component {

  render() {
    const categories = getCategories();

    return (
      <div>
        <h3>Категории</h3>
        {categories.map((category, i) => (
          <CategoryItem category={category} key={i} />
        ))}
      </div>
    )
  }
}
