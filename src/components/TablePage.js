import React, {Fragment} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";

const longTable = [
  'x   g1  x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   g18',
  'p1  H   g2  x   x   x   x   x   x   x   x   x   x   g13 g14 g15 g16 g17 He',
  'p2  Li  Be  x   x   x   x   x   x   x   x   x   x   B   C   N   O   F   Ne',
  'p3  Na  Mg  g3  g4  g5  g6  g7  g8  g9  g10 g11 g12 Al  Si  P   S   Cl  Ar',
  'p4  K   Ca  Sc  Ti  V   Cr  Mn  Fe  Co  Ni  Cu  Zn  Ga  Ge  As  Se  Br  Kr',
  'p5  Rb  Sr  Y   Zr  Nb  Mo  Tc  Ru  Rh  Pd  Ag  Cd  In  Sn  Sb  Te  I   Xe',
  'p6  Cs  Ba  lg  Hf  Ta  W   Re  Os  Ir  Pt  Au  Hg  Tl  Pb  Bi  Po  At  Rn',
  'p7  Fr  Ra  ag  Rf  Db  Sg  Bh  Hs  Mt  Ds  Rg  Cn  Nh  Fl  Mc  Lv  Ts  Og',
  'x   x   x   La  Ce  Pr  Nd  Pm  Sm  Eu  Gd  Tb  Dy  Ho  Er  Tm  Yb  Lu  x',
  'x   x   x   Ac  Th  Pa  U   Np  Pu  Am  Cm  Bk  Cf  Es  Fm  Md  No  Lr  x',
]
  .map(row => row.split(/\s+/));

const extraLongTable = [
  'x   g1  x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   g18',
  'p1  H   g2  x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   g13 g14 g15 g16 g17 He',
  'p2  Li  Be  x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   x   B   C   N   O   F   Ne',
  'p3  Na  Mg  x   x   x   x   x   x   x   x   x   x   x   x   x   x   g3  g4  g5  g6  g7  g8  g9  g10 g11 g12 Al  Si  P   S   Cl  Ar',
  'p4  K   Ca  x   x   x   x   x   x   x   x   x   x   x   x   x   x   Sc  Ti  V   Cr  Mn  Fe  Co  Ni  Cu  Zn  Ga  Ge  As  Se  Br  Kr',
  'p5  Rb  Sr  x   x   x   x   x   x   x   x   x   x   x   x   x   x   Y   Zr  Nb  Mo  Tc  Ru  Rh  Pd  Ag  Cd  In  Sn  Sb  Te  I   Xe',
  'p6  Cs  Ba  La  Ce  Pr  Nd  Pm  Sm  Eu  Gd  Tb  Dy  Ho  Er  Tm  Yb  Lu  Hf  Ta  W   Re  Os  Ir  Pt  Au  Hg  Tl  Pb  Bi  Po  At  Rn',
  'p7  Fr  Ra  Ac  Th  Pa  U   Np  Pu  Am  Cm  Bk  Cf  Es  Fm  Md  No  Lr  Rf  Db  Sg  Bh  Hs  Mt  Ds  Rg  Cn  Nh  Fl  Mc  Lv  Ts  Og',
]
  .map(row => row.split(/\s+/));


export default class TablePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElement: null,
    }
  }

  onElementSelect = el => {
    this.setState({selectedElement: el});
  };

  handleClose = () => {
    this.setState({selectedElement: null});
  };

  getWikiLink(name) {
    return `https://ru.wikipedia.org/wiki/${name}`;
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    const {selectedElement} = this.state;
    const title = selectedElement && selectedElement.name_ru || '';
    const isOpen = !!this.state.selectedElement;

    return (
      <Fragment>
        <CategoryList/>
        <ElementTable
          data={extraLongTable}
          onElementSelect={this.onElementSelect}
        />
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={isOpen}
          onRequestClose={this.handleClose}
        >
          {selectedElement && (
            <div>
              <p>
                <a href={this.getWikiLink(selectedElement.name_ru)} target="_blank">Википедия</a>
              </p>
              <p>
                Электронные оболочки: {selectedElement.shells.join(', ')}
              </p>
            </div>
          )}

        </Dialog>
      </Fragment>
    )
  }
}
