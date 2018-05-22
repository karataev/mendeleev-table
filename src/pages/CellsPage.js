import React from 'react';
import styled from 'styled-components';

import Navigation from "../components/Navigation";
import {findBySymbol} from "../elements";
import ElementCell from "../table/ElementCell";

const Container = styled.div`
padding: 10px;
`;

export default class CellsPage extends React.Component {

  constructor(props) {
    super(props);

    const hydrogen = findBySymbol('H');

    this.state = {
      element: hydrogen,
    }
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Container>
          <table>
            <tbody>
            <tr>
              <ElementCell
                data={this.state.element}
                color="#fff"
              />
            </tr>
            </tbody>
          </table>
        </Container>
      </div>
    )
  }
}
