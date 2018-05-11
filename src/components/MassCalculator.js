import React from 'react';
import PropTypes from 'prop-types';


function getTotalMass(elements) {
  let totalMass = elements.reduce((acc, el) => {
    return acc + el.atomic_mass;
  }, 0);

  return totalMass.toFixed(2);
}

function getFormula(elements) {
  return elements.map(el => el.symbol).join('');
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
