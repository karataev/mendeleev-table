import React from 'react';
import styled from 'styled-components';

import {findBySymbol} from "../elements";
import ElementCell from "./ElementCell";
import EmptyCell from "./EmptyCell";
import Lanthanides from "./Lanthanides";
import Actinides from "./Actinides";
import LanthanideGroupCell from "./LanthanideGroupCell";
import ActinideGroupCell from "./ActinideGroupCell";


const Root = styled.div`

`;

const tableData = [
  'H x x x x x x x x x x x x x x x x He',
  'Li Be x x x x x x x x x x B C N O F Ne',
  'Na Mg x x x x x x x x x x Al Si P S Cl Ar',
  'K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr',
  'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe',
  'Cs Ba lg Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn',
  'Fr Ra ag Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'
]
  .map(row => row.split(' '));

export default class ElementTable extends React.Component {

  render() {
    const getCell = (symbol, i) => {
      switch (symbol) {
        case 'x':
          return <EmptyCell key={i} />;
        case 'lg':
          return <LanthanideGroupCell key={i} />;
        case 'ag':
          return <ActinideGroupCell key={i}/>;
      }

      const element = findBySymbol(symbol);
      return <ElementCell data={element} key={i}/>
    };

    return (
      <Root>
        <table>
          <tbody>
          {tableData.map((row, j) => (
            <tr key={j}>
              {row.map((symbol, i) => getCell(symbol, i))}
            </tr>
          ))}
          <Lanthanides/>
          <Actinides/>
          </tbody>
        </table>
      </Root>
    )
  }
}
