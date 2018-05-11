import React from 'react';

import {CellRoot} from "../components/styles";
import {getLanthinidesCategory} from "../elements";

const CellRootExt = CellRoot.extend`
background: ${getLanthinidesCategory().color};
text-align: center;
`;

export default class LanthanideGroupCell extends React.Component {

  render() {
    return (
      <CellRootExt>57-71</CellRootExt>
    )
  }
}
