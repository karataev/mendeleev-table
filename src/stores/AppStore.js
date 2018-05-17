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


const colorBlocks = [
  {
    id: 1,
    title: 's-элементы',
    symbols: 'H He Li Be Na Mg K Ca Rb Sr Cs Ba Fr Ra'.split(' '),
    color: '#FF6699',
  },
  {
    id: 2,
    title: 'p-элементы',
    symbols: 'B C N O F Ne Al Si P S Cl Ar Ga Ge As Se Br Kr In Sn Sb Te I Xe Tl Pb Bi Po At Rn Nh Fl Mc Lv Ts Og'.split(' '),
    color: '#FFCC66',
  },
  {
    id: 3,
    title: 'd-элементы',
    symbols: 'Sc Ti V Cr Mn Fe Co Ni Cu Zn Y Zr Nb Mo Tc Ru Rh Pd Ag Cd Lu Hf Ta W Re Os Ir Pt Au Hg Lr Rf Db Sg Bh Hs Mt Ds Rg Cn'.split(' '),
    color: '#66FF66',
  },
  {
    id: 4,
    title: 'f-элементы',
    symbols: 'La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'.split(' '),
    color: '#9999FF',
  }
];

let colorFamilies = [
  {
    title: 'Щелочные металлы',
    color: '#f66',
    symbols: 'Li Na K Rb Cs Fr'.split(' '),
  },
  {
    title: 'Щелочноземельные металлы',
    color: '#ffdead',
    symbols: 'Be Mg Ca Sr Ba Ra'.split(' '),
  },
  {
    title: 'Переходные металлы',
    color: '#ffc0c0',
    symbols: 'Sc Ti V Cr Mn Fe Co Ni Cu Zn Y Zr Nb Mo Tc Ru Rh Pd Ag Cd Hf Ta W Re Os Ir Pt Au Hg Rf Db Sg Bh Hs Mt Ds Rg Cn'.split(' '),
  },
  {
    title: 'Постпереходные металлы',
    color: '#ccc',
    symbols: 'Al Ga In Sn Tl Pb Bi Nh Fl Mc Lv'.split(' '),
  },
  {
    title: 'Полуметаллы',
    color: '#cc9',
    symbols: 'B Si Ge As Sb Te Po'.split(' '),
  },
  {
    title: 'Другие неметаллы',
    color: '#a0ffa0',
    symbols: 'H C N O P S Se'.split(' '),
  },
  {
    title: 'Галогены',
    color: '#ff9',
    symbols: 'F Cl Br I At Ts'.split(' '),
  },
  {
    title: 'Благородные газы',
    color: '#c0ffff',
    symbols: 'He Ne Ar Kr Xe Rn Og'.split(' '),
  },
  {
    title: 'Лантаноиды',
    color: '#ffbfff',
    symbols: 'La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu'.split(' '),
  },
  {
    title: 'Актиноиды',
    color: '#ef99cc',
    symbols: 'Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'.split(' '),
  },
];

const colorGroups = [
  {
    id: 0,
    title: 'Нет',
    data: [],
  },
  {
    id: 1,
    title: 'По семействам',
    data: colorFamilies,
  },
  {
    id: 2,
    title: 'По блокам',
    data: colorBlocks,
  },
];

export default class AppStore extends Container {

  state = {
    tableForm: tableForms[0],
    colorGroup: colorGroups[2],
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

  getColorGroups() {
    return colorGroups;
  }

  getColorGroup() {
    return this.state.colorGroup;
  }

  setColorGroup(id) {
    const group = _.find(colorGroups, {id});
    this.setState({colorGroup: group});
  }

  getElementColor(symbol) {
    if (this.state.colorGroup.id === 1) {
      for (let i = 0; i < colorFamilies.length; i++) {
        let family = colorFamilies[i];
        if (family.symbols.indexOf(symbol) > -1) return family.color;
      }
    }

    if (this.state.colorGroup.id === 2) {
      for (let i = 0; i < colorBlocks.length; i++) {
        let block = colorBlocks[i];
        if (block.symbols.indexOf(symbol) > -1) return block.color;
      }
    }

    return '#fff';
  }
}