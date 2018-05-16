import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const MenuHolder = styled.div`
position: absolute;
top: 0;
left: 0;
`;

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <MenuHolder>
          <IconButton
            iconClassName="material-icons md-24"
            onClick={this.handleToggle}
          >menu</IconButton>
        </MenuHolder>
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
      </div>
    )
  }
}
