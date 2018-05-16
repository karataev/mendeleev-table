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

const shortTable = [
  'x   x   x   x   x   Группа',
  'Период   Ряд g1  g2  g3  g4  g5  g6  g7  g8  x   x',
  'p1  r1  H   x   x   x   x   x   H   He  x   x',
  'p2  r2  Li  Be  B   C   N   O   F   Ne  x   x',
  'p3  r3  Na  Mg  Al  Si  P   S   Cl  Ar  x   x',
  'p4  r4  K   Ca  Sc  Ti  V   Cr  Mn  Fe  Co  Ni',
  'p4  r5  Cu  Zn  Ga  Ge  As  Se  Br  Kr  x   x',
  'p5  r6  Rb  Sr  Y   Zr  Nb  Mo  Tc  Ru  Rh  Pd',
  'p5  r7  Ag  Cd  In  Sn  Sb  Te  I   Xe  x   x',
  'p6  r8  Cs  Ba  La  Hf  Ta  W   Re  Os  Ir  Pt',
  'p6  r9  Au  Hg  Tl  Pb  Bi  Po  At  Rn  x   x',
  'p7  r10  Fr  Ra  Ac  Rf  Db  Sg  Bh  Hs  Mt  Ds',
  'p7  r11 Rg  Cn  Nh  Fl  Mc  Lv  Ts  Og  x   x',
  'x   x   La  Ce  Pr  Nd  Pm  Sm  Eu  Gd  Tb  Dy  Ho  Er  Tm  Yb  Lu',
  'x   x   Ac  Th  Pa  U   Np  Pu  Am  Cm  Bk  Cf  Es  Fm  Md  No  Lr',
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
  {
    id: 3,
    title: 'Короткая',
    data: shortTable,
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