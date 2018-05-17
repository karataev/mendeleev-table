import React from 'react';

import {getAll} from "../elements";
import ElementItem from "./ElementItem";
import ColorList from "../colors/ColorList";
import Navigation from "../components/Navigation";
import groups from "../stores/groups";

const colorGroup = groups.getBlocksGroup();

export default class ElementList extends React.Component {

  render() {
    const elements = getAll();

    return (
      <div>
        <Navigation/>
        <ColorList items={colorGroup.data}/>
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
            <ElementItem
              color={groups.getSymbolColor(element.symbol, colorGroup.id)}
              data={element}
              key={element.symbol}
            />
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
