import React from 'react';

import {CellRoot} from "../components/styles";

const EmptyCellRoot = CellRoot.extend`
border-color: transparent;
text-align: center;
`;

export default class EmptyCell extends React.Component {

  render() {
    return (
      <EmptyCellRoot>{this.props.children}</EmptyCellRoot>
    )
  }
}
