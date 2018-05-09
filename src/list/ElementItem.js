import React from 'react';
import PropTypes from 'prop-types';

export default class ElementItem extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {data} = this.props;

    return (
      <tr>
        <td>{data.number}</td>
        <td>{data.name_ru || data.name}</td>
        <td>{data.symbol}</td>
        <td>{data.ypos}, {data.xpos}</td>
        <td>{data.atomic_mass}</td>
      </tr>
    )
  }
}
