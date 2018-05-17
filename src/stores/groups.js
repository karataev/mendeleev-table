import _ from 'lodash';

const blocks = [
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

const families = [
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

const groups = [
  {
    id: 0,
    title: 'Нет',
    data: [],
  },
  {
    id: 1,
    title: 'По семействам',
    data: families,
  },
  {
    id: 2,
    title: 'По блокам',
    data: blocks,
  },
];

function getSymbolColor(symbol, groupId) {
  if (!groupId) return '#fff';
  let group = _.find(groups, {id: groupId});
  if (!group) return '#fff';

  for (let i = 0; i < group.data.length; i++) {
    let item = group.data[i];
    if (item.symbols.indexOf(symbol) > -1) return item.color;
  }
  return '#fff';
}

export default {
  getAll: () => groups,
  getFamilyGroup: () => groups[1],
  getBlocksGroup: () => groups[2],
  getSymbolColor,
}