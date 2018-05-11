import React from 'react';

import {CellRoot} from "../components/styles";
import {getActinidesCategory, getLanthinidesCategory} from "../elements";

const CellRootExt = CellRoot.extend`
background: ${getActinidesCategory().color};
text-align: center;
`;

export default class ActinideGroupCell extends React.Component {

  render() {
    return (
      <CellRootExt>89-103</CellRootExt>
    )
  }
}
