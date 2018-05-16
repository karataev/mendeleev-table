import React from 'react';
import {Subscribe} from 'unstated';

import AppStore from '../stores/AppStore';
import {CellRoot} from "../components/styles";

const CellRootExt = CellRoot.extend`
background: ${props => props.color};
text-align: center;
`;

export default class ActinideGroupCell extends React.Component {

  render() {
    return (
      <Subscribe to={[AppStore]}>
        {app => (
          <CellRootExt
            color={app.getElementColor('Ac')}
          >89-103</CellRootExt>
        )}
      </Subscribe>
    )
  }
}
