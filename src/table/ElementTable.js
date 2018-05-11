import React from 'react';
import styled from 'styled-components';

import {findBySymbol} from "../elements";
import ElementCell from "./ElementCell";
import EmptyCell from "./EmptyCell";
import LanthanideGroupCell from "./LanthanideGroupCell";
import ActinideGroupCell from "./ActinideGroupCell";
import MassCalculator from "../components/MassCalculator";


const tableData = [
  'x 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18',
  '1 H x x x x x x x x x x x x x x x x He',
  '2 Li Be x x x x x x x x x x B C N O F Ne',
  '3 Na Mg x x x x x x x x x x Al Si P S Cl Ar',
  '4 K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr',
  '5 Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe',
  '6 Cs Ba lg Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn',
  '7 Fr Ra ag Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og',
  'x x x La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu',
  'x x x Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr',
]
  .map(row => row.split(' '));

export default class ElementTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElements: [],
    }
  }

  onElementClick = el => {
    this.setState({
      selectedElements: [...this.state.selectedElements, el],
    })
  };

  onClear = () => {
    this.setState({selectedElements: []});
  };

  render() {
    const getCell = (symbol, i) => {
      const element = findBySymbol(symbol);
      if (element) {
        return <ElementCell onClick={this.onElementClick} data={element} key={i}/>
      }

      switch (symbol) {
        case 'lg':
          return <LanthanideGroupCell key={i} />;
        case 'ag':
          return <ActinideGroupCell key={i}/>;
        default:
          const content = symbol === 'x' ? '' : symbol;
          return <EmptyCell key={i}>{content}</EmptyCell>;
      }
    };

    return (
      <div>
        <table>
          <tbody>
          {tableData.map((row, j) => (
            <tr key={j}>
              {row.map((symbol, i) => getCell(symbol, i))}
            </tr>
          ))}
          </tbody>
        </table>
        <MassCalculator
          elements={this.state.selectedElements}
          onClear={this.onClear}
        />
      </div>
    )
  }
}
