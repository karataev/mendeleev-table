import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const links = [
  {
    id: 1,
    url: '/',
    title: 'Таблица'
  },
  {
    id: 2,
    url: '/list',
    title: 'Список',
  },
  {
    id: 3,
    url: '/calculator',
    title: 'Калькулятор',
  },
  {
    id: 4,
    url: '/cells',
    title: 'Ячейки',
  },
];

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
          {links.map(link => (
            <Link to={link.url} key={link.id}>
              <MenuItem onClick={this.handleClose}>
                {link.title}
              </MenuItem>
            </Link>
          ))}
        </Drawer>
      </Fragment>
    )
  }
}
