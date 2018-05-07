import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import ElementCell from "./ElementCell";
import EmptyCell from "./EmptyCell";


const Root = styled.div`

`;

const Row = styled.div`
display: flex;
`;

const tableData = [
  'H x x x x x x x x x x x x x x x x He',
  'Li Be x x x x x x x x x x B C N O F Ne',
  'Na Mg x x x x x x x x x x Al Si P S Cl Ar',
  'K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr',
  'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe',
  'Cs Ba Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn',
  'Fr Ra Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'
]
  .map(row => row.split(' '));

function getElementBySymbol(elements, symbol) {
  return _.find(elements, {symbol});
}

export default class ElementTable extends React.Component {

  static propTypes = {
    elements: PropTypes.array.isRequired,
  };

  render() {
    const {elements} = this.props;

    return (
      <Root>
        {tableData.map((row, j) => (
          <Row key={j}>
            {row.map((symbol, i) => (
              symbol !== 'x' ? <ElementCell data={getElementBySymbol(elements, symbol)} key={i} /> : <EmptyCell key={i} />
            ))}
          </Row>
        ))}
      </Root>
    )
  }
}
