import React from 'react';

import {CellRoot} from "./styles";

const EmptyCellRoot = CellRoot.extend`
border-color: transparent;
`;

export default class EmptyCell extends React.Component {

  render() {
    return (
      <EmptyCellRoot />
    )
  }
}
