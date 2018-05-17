import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Fragment>
        <RaisedButton
          onClick={this.handleToggle}
        >Меню</RaisedButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/">
            <MenuItem onClick={this.handleClose}>
              Таблица
            </MenuItem>
          </Link>
          <Link to="/list">
            <MenuItem onClick={this.handleClose}>
              Список
            </MenuItem>
          </Link>
          <Link to="/calculator">
            <MenuItem onClick={this.handleClose}>
              Калькулятор
            </MenuItem>
          </Link>
        </Drawer>
      </Fragment>
    )
  }
}
