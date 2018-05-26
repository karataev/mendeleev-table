import {Container} from 'unstated';
import _ from 'lodash';

import groups from './groups';
import tableData from './tableForms';

const colorGroups = groups.getAll();
const tableForms = tableData.getAll();

export default class AppStore extends Container {

  state = {
    tableForm: tableForms[0],
    colorGroup: colorGroups[1],
  };

  setTableForm(id) {
    const tableForm = _.find(tableForms, {id});
    this.setState({tableForm});
  }

  getTableForm() {
    return this.state.tableForm;
  }

  getColorGroup() {
    return this.state.colorGroup;
  }

  setColorGroup(id) {
    const group = _.find(colorGroups, {id});
    this.setState({colorGroup: group});
  }

  getElementColor(symbol) {
    return groups.getSymbolColor(symbol, this.state.colorGroup.id);
  }
}