import _ from 'lodash';

import rawData from './data/PeriodicTableJSON';

let data;

let ruNames = {
  H: 'Водород',
  He: 'Гелий',
  Li: 'Литий',
  Be: 'Бериллий',
  B: 'Бор',
  C: 'Углерод',
  N: 'Азот',
  O: 'Кислород',
  F: 'Фтор',
  Ne: 'Неон',
  Na: 'Натрий',
  Mg: 'Магний',
  Al: 'Алюминий',
  Si: 'Кремний',
  P: 'Фосфор',
  S: 'Сера',
  Cl: 'Хлор',
  Ar: 'Аргон',
  K: 'Калий',
  Ca: 'Кальций',
  Sc: 'Скандий',
  Ti: 'Титан',
  V: 'Ванадий',
  Cr: 'Хром',
  Mn: 'Марганец',
  Fe: 'Железо',
  Co: 'Кобальт',
  Ni: 'Никель',
  Cu: 'Медь',
  Zn: 'Цинк',
  Ga: 'Галий',
  Ge: 'Германий',
  As: 'Мышьяк',
  Se: 'Селен',
  Br: 'Бром',
  Kr: 'Криптон',
  Rb: 'Рубидий',
  Sr: 'Стронций',
  Y: 'Иттрий',
  Zr: 'Цирконий',
  Nb: 'Ниобий',
  Mo: 'Молибден',
  Tc: 'Технеций',
  Ru: 'Рутений',
  Rh: 'Родий',
  Pd: 'Палладий',
  Ag: 'Серебро',
  Cd: 'Кадмий',
  In: 'Индий',
  Sn: 'Олово',
  Sb: 'Сурьма',
  Te: 'Теллур',
  I: 'Йод',
  Xe: 'Ксенон',
  Cs: 'Цезий',
  Ba: 'Барий',
  Hf: 'Гафний',
  Ta: 'Тантал',
  W: 'Вольфрам',
  Re: 'Рений',
  Os: 'Осмий',
  Ir: 'Иридий',
  Pt: 'Платина',
  Au: 'Золото',
  Hg: 'Ртуть',
  Tl: 'Таллий',
  Pb: 'Свинец',
  Bi: 'Висмут',
  Po: 'Полоний',
  At: 'Астат',
  Rn: 'Радон',
  Fr: 'Франций',
  Ra: 'Радий',
  Rf: 'Резерфордий',
  Db: 'Дубний',
  Sg: 'Сиборгий',
  Bh: 'Борий',
  Hs: 'Хассий',
  Mt: 'Мейтнерий',
  Ds: 'Дармштадтий',
  Rg: 'Рентгений',
  Cn: 'Копернций',
  Nh: 'Нихоний',
  Fl: 'Флеровий',
  Mc: 'Московий',
  Lv: 'Ливерморий',
  Ts: 'Теннессин',
  Og: 'Оганесон',
  La: 'Лантан',
  Ce: 'Церий',
  Pr: 'Празеодим',
  Nd: 'Неодим',
  Pm: 'Прометий',
  Sm: 'Самарий',
  Eu: 'Европий',
  Gd: 'Гадолиний',
  Tb: 'Тербий',
  Dy: 'Диспрозий',
  Ho: 'Гольмий',
  Er: 'Эрбий',
  Tm: 'Тулий',
  Yb: 'Иттербий',
  Lu: 'Лютеций',
  Ac: 'Актиний',
  Th: 'Торий',
  Pa: 'Протактиний',
  U: 'Уран',
  Np: 'Нептуний',
  Pu: 'Плутоний',
  Am: 'Америций',
  Cm: 'Кюрий',
  Bk: 'Берклий',
  Cf: 'Калифорний',
  Es: 'Эйнштейний',
  Fm: 'Фермий',
  Md: 'Менделевий',
  No: 'Нобелий',
  Lr: 'Лоуренсий',
};

let categories = [
  {
    name: 'Щелочные металлы',
    color: '#f66',
    symbols: 'Li Na K Rb Cs Fr'.split(' '),
  },
  {
    name: 'Щелочноземельные металлы',
    color: '#ffdead',
    symbols: 'Be Mg Ca Sr Ba Ra'.split(' '),
  },
  {
    name: 'Переходные металлы',
    color: '#ffc0c0',
    symbols: 'Sc Ti V Cr Mn Fe Co Ni Cu Zn Y Zr Nb Mo Tc Ru Rh Pd Ag Cd Hf Ta W Re Os Ir Pt Au Hg Rf Db Sg Bh Hs Mt Ds Rg Cn'.split(' '),
  },
  {
    name: 'Постпереходные металлы',
    color: '#ccc',
    symbols: 'Al Ga Ge In Sn Sb Tl Pb Bi Po Nh Fl Mc Lv'.split(' '),
  },
  {
    name: 'Полуметаллы',
    color: '#cc9',
    symbols: 'B Si Ge As Sb Te'.split(' '),
  },
  {
    name: 'Галогены',
    color: '#ff9',
    symbols: 'F Cl Br I At Ts'.split(' '),
  },
  {
    name: 'Благородные газы',
    color: '#c0ffff',
    symbols: 'He Ne Ar Kr Xe Rn Og'.split(' '),
  },
  {
    name: 'Лантаноиды',
    color: '#ffbfff',
    symbols: 'La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu'.split(' '),
  },
  {
    name: 'Актиноиды',
    color: '#ef99cc',
    symbols: 'Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'.split(' '),
  },
];

export function getLanthinidesCategory() {
  return categories[7];
}

export function getActinidesCategory() {
  return categories[8];
}

function getCategoryColor(symbol) {
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    if (category.symbols.indexOf(symbol) > -1) return category.color;
  }
  return '#fff';
}

export function getCategories() {
  return categories;
}

function addRuName(element) {
  element.name_ru = ruNames[element.symbol];
  return element;
}

function addCategoryColor(element) {
  element.category_color = getCategoryColor(element.symbol);
  return element;
}

export function init() {
  data = rawData.elements
    .map(addRuName)
    .map(addCategoryColor);
}

export function findBySymbol(symbol) {
  return _.find(data, {symbol});
}

export function getAll() {
  return data;
}