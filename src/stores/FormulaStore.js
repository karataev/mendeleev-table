import {Container} from 'unstated';

export default class FormulaStore extends Container {
  state = {
    elements: [],
  };

  addElement(el) {
    this.setState({
      elements: [...this.state.elements, el],
    })
  }

  clear() {
    this.setState({
      elements: [],
    })
  }
}