import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorItem from "./ColorItem";

const Root = styled.div`
display: flex;
`;

export default class ColorList extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Root>
        {this.props.items.map((item, i) => (
          <ColorItem item={item} key={i} />
        ))}
      </Root>
    )
  }
}
