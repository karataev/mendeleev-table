import React from 'react';

import {getAll} from "../elements";
import ElementItem from "./ElementItem";

export default class ElementList extends React.Component {

  render() {
    const elements = getAll();

    return (
      <div>
        <div>Список элементов</div>
        <table>
          <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Символ</th>
            <th>Период, группа</th>
            <th>Атомная масса</th>
          </tr>
          </thead>
          <tbody>
          {elements.map(element => (
            <ElementItem data={element} key={element.symbol} />
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
