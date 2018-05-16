import {Container} from 'unstated';
import _ from 'lodash';

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

const tableForms = [
  {
    id: 1,
    title: 'Длинная',
    data: longTable
  },
  {
    id: 2,
    title: 'Сверхдлинная',
    data: extraLongTable,
  },
];

export default class AppStore extends Container {

  state = {
    tableForm: tableForms[0],
  };

  setTableForm(id) {
    const tableForm = _.find(tableForms, {id});
    this.setState({tableForm});
  }

  getTableForm() {
    return this.state.tableForm;
  }

  getAllForms() {
    return tableForms;
  }
}