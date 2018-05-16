import React, {Fragment} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";


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
    const title = selectedElement && selectedElement.name_ru || '';
    const isOpen = !!this.state.selectedElement;

    return (
      <Fragment>
        <CategoryList/>
        <ElementTable
          onElementSelect={this.onElementSelect}
        />
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
