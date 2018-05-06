import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Element from "./Element";


const Root = styled.div`
position: relative;
`;

export default class ElementTable extends React.Component {

  static propTypes = {
    elements: PropTypes.array.isRequired,
  };

  render() {
    const {elements} = this.props;

    return (
      <Root>
        {elements.map(item => (
          <Element data={item} key={item.number} />
        ))}
      </Root>
    )
  }
}
