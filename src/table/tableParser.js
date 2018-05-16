import React from 'react';

import {findBySymbol} from "../elements";
import ElementCell from "./ElementCell";
import LanthanideGroupCell from "./LanthanideGroupCell";
import ActinideGroupCell from "./ActinideGroupCell";
import EmptyCell from "./EmptyCell";
import {CellRoot} from "../components/styles";

const GroupNumberCell = CellRoot.extend`
font-size: 16px;
text-align: center;
border: transparent;
`;

const PeriodNumberCell = CellRoot.extend`
font-size: 16px;
text-align: center;
border: transparent;
`;

const RowNumberCell = CellRoot.extend`
font-size: 16px;
text-align: center;
border: transparent;
`;

function getCell(symbol, i, onElementSelect) {
  const element = findBySymbol(symbol);
  if (element) {
    return (
      <ElementCell
        onClick={onElementSelect}
        data={element}
        key={i}
      />
    )
  }

  let group = /g(\d+)/.exec(symbol);
  if (group) {
    return <GroupNumberCell key={i}>{group[1]}</GroupNumberCell>
  }

  let period = /r(\d+)/.exec(symbol);
  if (period) {
    return <PeriodNumberCell key={i}>{period[1]}</PeriodNumberCell>
  }

  let row = /p(\d+)/.exec(symbol);
  if (row) {
    return <RowNumberCell key={i}>{row[1]}</RowNumberCell>
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
}

export default {
  getCell,
}