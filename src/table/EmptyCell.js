import React from 'react';

import {CellRoot} from "../components/styles";

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
