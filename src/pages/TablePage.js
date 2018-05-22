import React, {Fragment} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Subscribe} from 'unstated';

import ElementTable from "../table/ElementTable";
import Settings from "../table/Settings";
import AppStore from '../stores/AppStore';


export default class TablePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElement: null,
    }
  }

  onElementSelect = el => {
    this.setState({selectedElement: el});
  };

  handleClose = () => {
    this.setState({selectedElement: null});
  };

  getWikiLink(name) {
    return `https://ru.wikipedia.org/wiki/${name}`;
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    const {selectedElement} = this.state;
    const title = selectedElement && selectedElement.name_ru;
    const isOpen = !!this.state.selectedElement;

    return (
      <Fragment>
        <Settings/>
        <Subscribe to={[AppStore]}>
          {store => (
            <ElementTable
              data={store.getTableForm().data}
              onElementSelect={this.onElementSelect}
            />
          )}
        </Subscribe>
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={isOpen}
          onRequestClose={this.handleClose}
        >
          {selectedElement && (
            <div>
              <p>
                <a href={this.getWikiLink(selectedElement.name_ru)} target="_blank">Википедия</a>
              </p>
              <p>
                Электронные оболочки: {selectedElement.shells.join(', ')}
              </p>
            </div>
          )}

        </Dialog>
      </Fragment>
    )
  }
}
