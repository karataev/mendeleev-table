import React from 'react';
import PropTypes from 'prop-types';


function getTotalMass(elements) {
  let totalMass = elements.reduce((acc, el) => {
    return acc + el.atomic_mass;
  }, 0);

  return totalMass.toFixed(2);
}

function getFormula(elements) {
  let items = [];
  const addItem = symbol => items.push({symbol, count: 1});

  elements.forEach((el, i) => {
    if (i === 0) {
      addItem(el.symbol);
      return;
    }

    let lastItem = items[items.length - 1];
    el.symbol === lastItem.symbol ? lastItem.count++ : addItem(el.symbol);
  });

  return items.reduce((acc, item) => {
    let str = item.count === 1 ? item.symbol : `${item.symbol}${item.count}`;
    return acc + str;
  }, '');
}

export default class MassCalculator extends React.Component {

  static propTypes = {
    elements: PropTypes.array.isRequired,
    onClear: PropTypes.func.isRequired,
  };

  render() {
    const {elements, onClear} = this.props;
    const isEmpty = !elements || elements.length === 0;

    return (
      <div>
        <div>Калькулятор молярной массы</div>
        {isEmpty && <div>Пусто</div>}
        {!isEmpty && (
          <div>
            <div>
              Формула: {getFormula(elements)}
            </div>
            <div>
              Молярная масса: {getTotalMass(elements)} г/моль
            </div>
            <div>
              <button onClick={onClear}>Очистить</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
